const User = require('../models/users')
const Chat = require('../models/chats')

const getAllUsers = async (req,res)=>{
    try {
       const users =  await User.find({})
       res.status(200).send(users) 
    } catch (error) {
        res.status(400).send(error)
    }
}


const getUser = async (req,res) =>{
    try {
        const {id:userID} = req.params
        const user = await User.findOne({_id:userID})

        if(!userID){
            res.status(404).json({msg:'user with this id not found'})
        }
        else  res.status(200).send(user)
       
    } catch (error) {
        res.status(400).json(error)
    }
}

const createUser = async  (req,res) =>{
    try {
        const body = req.body
        const user = await User.create(body)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).send(error)
    }
}

const deleteUser = async  (req,res) =>{
    try {
        const {id:userId} = req.params
        const userDeleted = await User.deleteOne({_id:userId})
        if(!userDeleted){
            res.status(404).json({ msg : 'user with this id not found'})
        }
        else {
           // await User.deleteOne({_id:userId})
            res.status(200).json({msg:'user deleted'})
        }
   
    } catch (error) {
        res.status(400).send(error)
    }
}

const getAllChats = async  (req,res) =>{
    try {
        const {id:userID} = req.params
        const user = await User.findOne({_id:userID})
        if(!userID){
            res.status(404).json({msg:'user with this id not found'})
        }
        else res.status(200).send(user.chats)

    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    getAllChats,
    getAllUsers,
    deleteUser,
    getUser,
    createUser
}