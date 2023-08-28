const mongoose=require('mongoose')
const schema=mongoose.Schema({
    name:{type:String,
        minLength:3,
        required:true},
    origin:String,
    image:String
})
const model=mongoose.model('Users',schema)
module.exports=model;