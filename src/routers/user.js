import AppExpress from "@itznotabug/appexpress"
const router = new AppExpress()
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

router.get('/user/:username', getUser)
router.post("/user", createUser)

export default router