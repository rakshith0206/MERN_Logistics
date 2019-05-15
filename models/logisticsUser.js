const mongoose = require("mongoose")
const logisticSchema = mongoose.Schema

const logisticsUserSchema = new logisticSchema({
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


module.exports = logisticUser = mongoose.model('logisticsusers',logisticsUserSchema)