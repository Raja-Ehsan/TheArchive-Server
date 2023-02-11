const express=require("express");
const mongoose=require("mongoose");
const router =express.Router();
const orderModel=mongoose.model("Order");

router.get("/get",async (req,res)=>{
    try{
        const data = await orderModel.find();
        res.json(data)
    }catch(err){
        res.log(err)
    }
})

router.get("/approveOrder/:id",async (req,res)=>{
    try{
        await orderModel.findOneAndUpdate({_id:req.params.id},{$set:{state:'Approved'}})
        res.json({message:'Added'})
    }catch(err){
        console.log(err)
    }
})

router.get("/completed/:id",async (req,res)=>{
    try{
        await orderModel.findOneAndUpdate({_id:req.params.id},{$set:{state:'Completed'}})
        res.json({message:'Added'})
    }catch(err){
        console.log(err)
    }
})

router.post("/addOrder",async (req,res)=>{
    try{
        const newOrder =new orderModel(req.body);
        await newOrder.save((err,item)=>{
            res.json({id:item._id})
        });
    }catch(err){
        console.log(err)
    }
})

router.get("/getStatus/:id",async (req,res)=>{
    try{
        const data = await orderModel.findOne({_id:req.params.id});
        res.json({status:data.state})
    }catch(err){
        console.log(err)
    }
})

module.exports=router;