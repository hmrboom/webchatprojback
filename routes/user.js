const express = require('express')
const router = express.Router()


const {getAllChats,getAllUsers,deleteUser,getUser,createUser,getUserByName} = require('../controller/users')

router.route('/').get(getAllUsers).post(createUser)
router.route('/getAllChats/:id').get(getAllChats)
router.route('/:id').delete(deleteUser).get(getUser)
router.route('/getUser/:name').get(getUserByName)

module.exports = router