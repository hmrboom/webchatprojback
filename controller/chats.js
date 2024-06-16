const Chat = require('../models/chats')
const User = require('../models/users')

const createChat = async (req,res)=>{

    try {
        const chat = await Chat.create(req.body)
        await User.updateMany(
            { _id : { $in : req.body.users } },
            { $push:{
                chats : chat._id
            } }
        )

        res.status(201).send(chat)

    } catch (error) {
        res.status(400).json(error)
    }

}

const deleteMsg = async (req,res)=>{
    try {
        const {id:convID,msgid:msgID} = req.params
        const chat = await Chat.updateOne({ _id:convID },{
            $pull:{
                conversations : { _id : msgID }
            }
        })
        //https://dev.to/paulasantamaria/mongodb-animated-adding-and-removing-elements-from-arrays-50cl
        if(!chat){
            res.status(404).json({msg:'no chat with tihs id'})
        }
        res.status(200).json({msg:'msg deleted'})
    } catch (error) {
        res.status(400).send(error)
    }
}
const addMsg = async (req,res)=>{
    try{
        const {id:convID} = req.params

        const chat =  await Chat.updateOne({ _id:convID },{
            $push:{
                conversations : req.body
            }
        })
        if(!chat){
            res.status(404).json({ msg:'no chat with this id' })
        }
        res.status(200).json({msg:'msg added'})
    }
    catch(err){
        res.status(400).send(err)
    }
}

module.exports = {
    createChat,
    deleteMsg,
    addMsg
}