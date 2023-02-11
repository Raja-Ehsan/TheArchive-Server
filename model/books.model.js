const mongoose=require('mongoose');

var BookSchema=new mongoose.Schema({
    bookName:{
        type:String,
        required:"Required"
    },
    bookPrice:{
        type:Number
    },
    image:{
        type:String
    },
    bookAuthor:{
        type:String
    },
    publishedOn:{
        type:String
    },
    bookPages:{
        type:String
    },
    bookDescription:{
        type:String
    },
    featured:{
        type:Boolean
    },
    category:{
        type:String
    }
})

mongoose.model("Book",BookSchema)