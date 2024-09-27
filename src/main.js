import AppExpress from "@itznotabug/appexpress"
import userRoutes from './routers/user.js'
import authMiddleware from "./middleware/auth.js"
const app = new AppExpress()

app.middleware(authMiddleware)
app.use("/user", userRoutes)

export default async (context) => await app.attach(context);