const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName : {
        type:String,
        required:[true,"must provide a name"],
        trim:true
    },
    passWord:{
        type:String,
        required:[true,"must provide a password"],
        trim:true
    },
    chats:{
        type:Array,
    }
})

module.exports = mongoose.model('User',UserSchema)