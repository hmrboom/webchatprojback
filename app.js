const express = require('express')
const app = express()
const user = require('./routes/user')
const chat = require('./routes/chat')
const port = "3000"
const db = require('./db/connect')
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use('/api/v1/chats',chat)
app.use('/api/v1/users',user)


const start = async ()=>{
    try {
        await db(process.env.URL)
        app.listen(port, console.log('Server is working...'))
    } catch (error) {
        console.log(error)
    }
}
start()
