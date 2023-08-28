const Userrpstry=require('../repository/Userrpstry')
const get=async(req,res)=>{
      const data=await Userrpstry.get()
      res.json(data)
      res.status(200)
}
const post=async(req,res)=>{
    try{
    const data=req.body
    await Userrpstry.create(data)
    res.send('created')
      res.status(201)}
      catch(err){
        if(err && err.message && err.message.indexOf('validationfailed')>-1){
            console.log(err.errors)
            res.status(400)
            res.json(err.errors)
        }else{
            res.status(500)
            res.send('intrenal server error')
        }
        
      }

}
const remove=async(req,res)=>{
    const id=req.params.id
    await Userrpstry.remove(id)
    res.send(' ')
      res.status(201)
}
const update=async(req,res)=>{
const id=req.params.id
const data=req.body
await Userrpstry.update(id,data)
res.send('updated')
      res.status(201)
}
const partial=async(req,res)=>{
    const id=req.params.id
const data=req.body
await Userrpstry.update(id,data)
res.send('updated')
      res.status(201)
}
module.exports={
    get,post,update,partial,remove
}