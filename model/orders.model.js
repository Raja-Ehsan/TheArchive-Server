const mongoose=require('mongoose');

var OrderSchema=new mongoose.Schema({
    total:{
        type:Number,
    },
    products:{
        type:Array,
    },
    User:{
        type:Object
    },
    state:{
        type:String
    }
})

mongoose.model("Order",OrderSchema)