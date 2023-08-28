const loginctrl=require('../Controllers/loginctrl')
const express=require('express')
const router=express.Router()
const authentication=require('../utils/Auth')
router.get('/Protected',authentication.tokenauth,(req,res)=>{
    res.send('protected')
})
router.post('/signup',loginctrl.signup)
router.post('/login',loginctrl.login)
module.exports=router;