const mongoose = require('mongoose')

let currentDate = new Date().toJSON().slice(0, 16).replace("T"," ")

const ChatSchema =new mongoose.Schema({
    type:{
        type:String,
        default:'private'
    },
    created:{
        type:String,
        default:currentDate
    },
    users:{
        type:Array
    },
    // conversations:{
    //     user:String,
    //     text:Array,
    //     dateTime:{
    //         type:Array,
    //         default:currentDate
    //     } 
    // }
    conversations:[
        {
        text:{type:String},
        user:{type:Object},
        when:{
            type:String,
            default:currentDate
        }
        }
    ]
})
module.exports = mongoose.model('Chat',ChatSchema)