const mongoose = require("mongoose")
const TruckerSchema = mongoose.Schema

const truckerUserSchema = new TruckerSchema({
    first_name: {
        type: String
    },
    last_name: {
        type:String
    },
    email: {
        type:String,
        required:true
    },
    mobile: {
        type:Number,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    date: {
        type: Date,
        default : Date.now
    }
      
})


module.exports = truckerUser = mongoose.model('truckerusers',truckerUserSchema)