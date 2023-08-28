const express=require('express')
const app=express();
const port=4000;
const bodyparser=require('body-parser')
const path=require('path')
const cors=require('cors') 
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/Fullstack',()=>{
    console.log('connected to db')
})
const morgan=require('morgan')
// const finalroute=require('./routes/finalroutes')
const loginroutes=require('./route/loginroute')
const Userroutes=require('./route/userroute')
const Auth=require('./utils/Auth')
app.use(bodyparser.json())
app.use(morgan('combined'))
app.use(cors())
app.use('/new',loginroutes)
app.use(Auth.tokenauth)
app.use('/',Userroutes)
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin',"*")
   res.header(
        "Access-Control-Allow-Headers",
        "X-Requested-With"
        )
        next();
})
app.listen(port,()=>{
    console.log('server is running on'+port)
})