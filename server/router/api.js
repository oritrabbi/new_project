const router = require("express").Router()
const user = require('../controller/user')

router.get('/addUser', user.addUser)
router.get('/getAllUser', user.getAllUser)

module.exports = router