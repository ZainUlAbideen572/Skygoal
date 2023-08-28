const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
    password:String
})
const model=new mongoose.model('cred',schema)
module.exports=model;