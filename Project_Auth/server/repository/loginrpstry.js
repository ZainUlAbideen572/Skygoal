const loginmodel=require('../models/loginmodel')
const signup=(data)=>{
    const product=new loginmodel(data)
    return product.save()
}
const signin=(email)=>{
    return loginmodel.findOne({email:email})
}
module.exports={
    signup,signin
}