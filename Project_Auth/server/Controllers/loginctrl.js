const loginrpstry=require('../repository/loginrpstry')
const bcrypt=require('bcrypt')
const crypto=require('../utils/Crypto')
const jwt=require('jsonwebtoken')
const signup=async(req,res)=>{
    const hash=await crypto.gethash(req.body.password)
    // console.log('hash',hash)
    req.body.password=hash
    const data=req.body
    await loginrpstry.signup(data)
    res.status(201)
    res.send('created')
}
const login=async(req,res)=>{
    const data=req.body
    const user=await loginrpstry.signin(data.email)
    if(!user){
        res.status(401)
        res.send('unauthorised')
        return
    }
        const valid=await crypto.verify(data.password,user.password)  
        if(valid){
            const token=jwt.sign({email:user.email},'secret')
            res.status(200)
            res.json({
                email:user.email,
                token:token
            })
            return;
        }
    else
    {
        res.status(401)
        res.send('invalid email or password')
    }
}
module.exports={
    signup,login
}