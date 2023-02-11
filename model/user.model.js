const mongoose=require('mongoose');

var userSchema=new mongoose.Schema({
    userName:{
        type:String
    },
    userEmail:{
        type:String
    },
    userPassword:{
        type:String
    },
    userCity:{
        type:String
    },
    userState:{
        type:String
    },
    userRole:{
        type:String
    },
    refreshToken:{
        type:String
    }
})

mongoose.model("User",userSchema)