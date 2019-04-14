const express = require("express")
const truckerusers = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const truckerUser = require("../models/truckerUser")
truckerusers.use(cors())

process.env.SECRET_KEY =' secret'

truckerusers.post('/truckerregister',(req,res) => {
    const today = new Date()
    const truckeruserData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        mobile:req.body.mobile,
        email: req.body.email,
        password: req.body.password,
        created:today    }

    truckerUser.findOne({
        email: req.body.email
    })
    .then(truckeruser => {
        if(!truckeruser){
            bcrypt.hash(req.body.password,10,(err,hash)=>{
                truckeruserData.password = hash
                truckerUser.create(truckeruserData)
                .then(truckeruser => {
                    res.json({status: truckeruser.email + 'registered!'})
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


truckerusers.post('/truckerlogin', (req,res)=>{
    truckerUser.findOne({
        email: req.body.email
    })
    .then(truckeruser => {
        if(truckeruser){
            if(bcrypt.compareSync(req.body.password,truckeruser.password)){
                const payload = {
                    _id: truckeruser._id,
                    first_name: truckeruser.first_name,
                    last_name: truckeruser.last_name,
                    email:truckeruser.email,
                    mobile:truckeruser.mobile
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

truckerusers.get('/profile',(req,res)=>{
    var decoded = jwt.verify(req.header['authorization'],process.env.SECRET_KEY)
    truckerUser.findOne({
        _id: decoded._id
    })
    .then(truckeruser =>{
        if(truckeruser){
            res.json(truckeruser)
        }else {
            res.send("User does not exist")
        }

    })
    .catch(err=>{
        res.send('error:' + err)
    })
})

module.exports = truckerusers



