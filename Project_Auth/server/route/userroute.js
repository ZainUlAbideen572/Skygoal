const express=require('express')
const multer=require('multer')
const router=express.Router();
const Userctrl=require('../controllers/Userctrl')
const storage=multer.diskStorage({
    destination:'uploads/',
    filename:function(req,file,cb){
        const prefix=Date.now()+Math.round(Math.random()*1E9)
        const filename=prefix+'-'+file.originalname
        cb(null,filename)
        req.body.image=filename
    }
})
const uploads=multer({
       storage:storage,
       filefilter:function(req,file,cb){
        console.log(file.mimetype)
       cb(null,true)
       }
})
router.get('/userdetails',Userctrl.get)
router.get('/protected',)
router.post('/',uploads.single('image'),Userctrl.post)
router.delete('/:id',Userctrl.remove)
router.put('/:id',Userctrl.update)
router.patch('/:id',Userctrl.partial)
module.exports=router;