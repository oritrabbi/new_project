const express = require("express")
const app = express()
const bodyparser = require("body-parser")
app.use(bodyparser.json())
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors=require('cors')
dotenv.config()
app.use(cors())
const router = require('./router/api')
const { use } = require("./router/api")


const conectionprams = {

    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}



mongoose.connect(process.env.MONGO, conectionprams)
    .then(() => {
        console.log("connected")
    })
    .catch((err) => {
        console.log("error  " + err)
    })
app.use('/', router)
app.listen(process.env.SERVER, () => { console.log("listen") })
app.all("/*",function(req,res,next){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Credentals",true)
    res.header("Access-Control-Allow-Method",'GET,PUT,POST,DELETE,OPTIONS,PATCH')
    res.header("Access-Control-Allow-Origin",'Content-Type,Authorization,Content-Lenght,X-Requested-With');
if(req.method==='OPTIONS'){
    res.status(200).end();
}else{
    next()
}
})