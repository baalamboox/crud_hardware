import express from 'express'
import dotenv from 'dotenv'
import fileUpload from 'express-fileupload'
import router from './routers/hardware.mjs'
import { connection_db } from './database/connection_db.mjs'

const server = express()
dotenv.config()
connection_db()

server.set('view engine', 'pug')
server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(fileUpload())
server.use('/static', express.static('public'))
server.use(router)

server.listen(process.env.SERVER_PORT, () => {
    console.log('Servidor funcionando!')
})