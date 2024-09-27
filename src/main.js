import AppExpress from "@itznotabug/appexpress"
import authMiddleware from "./middleware/auth.js"
const app = new AppExpress()
import { Client, Users } from 'node-appwrite';

const getRouters = (req, res) => {
    res.json({
        'routers': ['/', '/user/:username', '/user']
    })
}

const getUsers = (req, res, log, error) => {
    const client = new Client()
    .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
    .setKey(req.headers['x-appwrite-key'] ?? '');
    const users = new Users(client);
    const response = users.list();
    log(`Response: ${response}`)
    res.json({
        'users': response
    })

}

app.get('/', getRouters)
// app.use("/user", userRoutes)

app.get('/users', getUsers)

export default async (context) => await app.attach(context);