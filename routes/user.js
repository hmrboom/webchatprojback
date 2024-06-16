const express = require('express')
const router = express.Router()


const {getAllChats,getAllUsers,deleteUser,getUser,createUser} = require('../controller/users')

router.route('/').get(getAllUsers).post(createUser)
router.route('/getAllChats/:id').get(getAllChats)
router.route('/:id').delete(deleteUser).get(getUser)

module.exports = router