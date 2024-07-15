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

const getUserByName = async (req,res) =>{
    try {
        const {name:userName} = req.params
        const user = await User.findOne({userName:userName})

        if(!user){
            res.status(404).json({msg:'user with this name not found'})
        }
        else  res.status(200).send(user)
       
    } catch (error) {
        res.status(400).json(error)
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
async function test(chats){
          let chatsArr = [];
         // console.log("cv",chats.toString())
          var array = chats.toString().split(",");
          console.log(array);

          array.forEach(async element => {
            
          const chat = await Chat.findOne({_id:element})
          //console.log(chat);
          if(!chat){
            //res.status(404).json({msg:'chat with this id = '+element+" not exist"})
        }
        else chatsArr.push(chat);
        });
        console.log(chatsArr);
        return chatsArr;
}
const getAllChats = async  (req,res) =>{
    try {
        const {id:userID} = req.params
        const user = await User.findOne({_id:userID})
       const chatsArr =  await test(user.chats);
        if(!userID){
            res.status(404).json({msg:'user with this id not found'})
        }
        else res.status(200).send(chatsArr)

    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    getAllChats,
    getAllUsers,
    deleteUser,
    getUser,
    createUser,
    getUserByName
}