var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
var port = process.env.PORT || 5000
var session = require('express-session')
var expressValidator = require('express-validator')

// handle sessions
app.use(session({
    secret:'secret',
    saveUninitialized:true,
    resave:true
}));


//validator

app.use(expressValidator({
   errorFormatter: function(param, msg, value){
     var namespace = param.split('.'),
     root = namespace.shift(),
     formParam = root;
    while(namespace.length){
      formParam += '['+ namespace.shift()
    }
    return{
      param: formParam,
      msg:msg,
      value:value
    };
   }
 }));
 
app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

const mongoURI = 'mongodb://localhost:27017/Logitrucks'

mongoose
  .connect(mongoURI, {useNewUrlParser:true})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err))


  var Users = require('./routes/Users')
  var logisticsUsers = require('./routes/logisticsusers')
  var truckerUsers = require('./routes/truckerusers')
  app.use('/users',Users)
  app.use('/logisticsusers',logisticsUsers)
  app.use('/truckerusers',truckerUsers)
  app.listen(port,() => {
      console.log("Server is running on port: "+port)
  })