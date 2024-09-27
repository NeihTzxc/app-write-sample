import AppExpress from "@itznotabug/appexpress"
const app = new AppExpress()
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

app.get('/user/:username', getUser)
app.post("/user", createUser)

export default router