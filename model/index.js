const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Books", (err) => {
    if (!err) {
        console.log("Success");
    }
    else {
        console.log("Error connecting to database")
    }
})
const book=require("./books.model");
const order=require("./orders.model");
const user=require("./user.model");