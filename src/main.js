import AppExpress from "@itznotabug/appexpress"
import authMiddleware from "./middleware/auth.js"
const app = new AppExpress()
import { Client, Users } from 'node-appwrite';

const getRouters = (req, res) => {
    res.json({
        'routers': ['/', '/user/:username', '/user']
    })
}

const getUsers = async (req, res, log, error) => {
    try{
        const client = new Client()
        .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
        .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
        .setKey(req.headers['x-appwrite-key'] ?? '');
        const users = new Users(client);
        log(`Users: ${users}`)
        const response = await users.list();
        log(`Response: ${response}`)
        log(`Responce JSON: ${JSON.stringify(response)}`)
        return res.status(200).json({
            'users': response
        })
    } catch (error) {
        return res.status(400).json({
            "error": error
        })
    }
}

app.get('/', getRouters)
// app.use("/user", userRoutes)

app.get('/users', getUsers)

export default async (context) => await app.attach(context);