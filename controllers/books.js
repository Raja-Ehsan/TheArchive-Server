const express=require("express");
const mongoose=require("mongoose");
const router =express.Router();
const bookModel=mongoose.model("Book");

router.get("/get",async (req,res)=>{
    try{
        const data = await bookModel.find();
        res.json(data)
    }catch(err){
        res.log(err)
    }
})
router.get("/getProduct/:id",async (req,res)=>{
    try{
        console.log(req.params.id)
        const data = await bookModel.findOne({_id:req.params.id});
        res.json(data)
    }catch(err){
        res.log(err)
    }
})
module.exports=router;