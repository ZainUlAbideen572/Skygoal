const Usermodel=require('../models/Usermodel')
// const reviewmodel=require('../models/reviewmodel')
const get=()=>{
     return Usermodel.find()
   }
const create=(data)=>{
    const product=new Usermodel(data)
    return product.save()
}
const remove=(id)=>{
    return Usermodel.remove({_id:id})
}

const update=(id,data)=>{
        return Usermodel.updateOne({_id:id},{$set:{
            name:data.name,
            type:data.type,
            origin:data.origin
        }})
}
const partial=(id,data)=>{
    delete data._id;
    const updobj={}
    for(var keys in updobj){
        updobj[name]=data[name]
        updobj[type]=data[type]
        updobj[origin]=data[origin]
    }
    return Usermodel.updateOne({_id:id},{$set:updobj})
}
module.exports={
    get,remove,update,create,partial
}