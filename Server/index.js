const express = require('express')
const bodyParser = require('body-parser')
import userRouter from './Controllers/users'
import createConnection from './DB/index'

const app = express()
const port = 8080
createConnection()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/users', userRouter)

app.listen(port,(err)=>{
    console.log('err>>>', err);
})