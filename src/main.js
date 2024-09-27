import AppExpress from "@itznotabug/appexpress"
import userRoutes from './routers/user.js'
import authMiddleware from "./middleware/auth.js"
const app = new AppExpress()

const getRouters = (req, res) => {
    res.json({
        'routers': ['/', '/user/:username', '/user']
    })
}

app.get('/', getRouters)
// app.use("/user", userRoutes)

export default async (context) => await app.attach(context);