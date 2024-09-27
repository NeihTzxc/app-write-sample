import AppExpress from "@itznotabug/appexpress"

const app = new AppExpress()

const getRouters = (req, res) => {
    res.json({
        'routers': ['/', '/user/:username', '/user']
    })
}

const getUser = (req, res) => {
    const { username } = req.params 
    res.json({
        'username': username
    })
}

const createUser = (req, res) => {
    res.json({
        'postData': req.body
    }) 
}

app.get('/', getRouters)
app.get('/user/:username', getUser)
app.post("/user", createUser)

export default async (context) => await app.attach(context);