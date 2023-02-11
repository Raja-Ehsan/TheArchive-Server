const express=require("express");
const mongoose=require("mongoose");
const router =express.Router();
const userModel=mongoose.model("User");
const bcrypt = require('bcryptjs');
router.get("/getAllUser",async (req,res)=>{
    try{
        const data = await userModel.find();
        res.json(data)
    }catch(err){
        res.json(err)
    }
})
module.exports=router;