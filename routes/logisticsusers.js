const express = require("express")
const logisticsusers = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const logisticsUser = require("../models/logisticsUser")
logisticsusers.use(cors())

process.env.SECRET_KEY =' secret'

logisticsusers.post('/logisticsregister',(req,res) => {
    const today = new Date()
    const logisticsuserData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        mobile:req.body.mobile,
        email: req.body.email,
        password: req.body.password,
        created:today    }

    logisticsUser.findOne({
        email: req.body.email
    })
    .then(logisticsuser => {
        if(!logisticsuser){
            bcrypt.hash(req.body.password,10,(err,hash)=>{
                logisticsuserData.password = hash
                logisticsUser.create(logisticsuserData)
                .then(logisticsuser => {
                    res.json({status: logisticsuser.email + 'registered!'})
                })
                .catch(err =>{
                    res.send('error:' + err)
                })
            })

        }else{
            res.json({error: 'User already exists'})

        }
    })
    .catch(err =>{
        res.send('error: ' + err)
    })
})


logisticsusers.post('/logisticslogin', (req,res)=>{
    logisticsUser.findOne({
        email: req.body.email
    })
    .then(logisticsuser => {
        if(logisticsuser){
            if(bcrypt.compareSync(req.body.password,logisticsuser.password)){
                const payload = {
                    _id: logisticsuser._id,
                    first_name: logisticsuser.first_name,
                    last_name: logisticsuser.last_name,
                    email:logisticsuser.email,
                    mobile:logisticsuser.mobile
                }
                let token = jwt.sign(payload,process.env.SECRET_KEY,{
                    expiresIn: 1440
                })
                res.send(token)
            }else{
                res.json({error: "User does not exist"})
            }

        }else{
            res.json({error:"User does not exist"})
        }
    })
    .catch(err => {
        res.send('error:'+err)
    })
})

logisticsusers.get('/profile',(req,res)=>{
    var decoded = jwt.verify(req.header['authorization'],process.env.SECRET_KEY)
    logisticsUser.findOne({
        _id: decoded._id
    })
    .then(logisticsuser =>{
        if(logisticsuser){
            res.json(logisticsuser)
        }else {
            res.send("User does not exist")
        }

    })
    .catch(err=>{
        res.send('error:' + err)
    })
})

module.exports = logisticsusers



