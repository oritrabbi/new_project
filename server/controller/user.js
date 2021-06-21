const User = require("../model/user")
const addUser = async (req, res) => {
  const user=new User(req.body)
user.save().
then(user=>{
    res.status(200).json({user:user})
    .catch(err=>{
        res.send(err)
    })
})
}

const getAllUser = (req, res) => {
    console.log("enter function get!!!!!!!!!");
    User.find()
    .then((users) => {
        res.json({ users: users })
    })
    .catch((err) => {
        res.send(err)
    })
}

module.exports = { getAllUser,addUser }





















