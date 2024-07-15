const express = require('express')
const router = express.Router()

const {createChat, deleteMsg, addMsg, getAllConv} = require('../controller/chats')

router.route('/').post(createChat)
router.route('/:id').get(getAllConv)
router.route('/deleteMsg/:id/:msgid').patch(deleteMsg)
router.route('/addMsg/:id').patch(addMsg)

module.exports = router