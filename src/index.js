const express = require('express');
const app = express()
const db =require('./config/db')
const router = require('./routes/route.js')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const path = require('path')
const cors = require('cors')

dotenv.config({ path: './.env'});
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(router)
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))


app.listen(8000, ()=> console.log('server is running'));
 