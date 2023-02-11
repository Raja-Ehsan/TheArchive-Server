const express = require("express");
const connection = require("./model/index");
const app = express();
const path = require("path");
const cors = require('cors');
const bodyparser = require("body-parser");
var cookies = require("cookie-parser");
const BookController = require('./controllers/books');
const OrderController=require('./controllers/orders');
const UserController=require('./controllers/users');
const handleNewUser=require('./controllers/registerController');
const handleLogin=require('./controllers/loginController');
const handleLogout=require('./controllers/logoutController');
app.use(bodyparser.json());

app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(cors({
    origin: 'http://localhost:3000',
    credentials : true
}));

app.use(cookies());

app.use("/book",BookController);

app.use("/order",OrderController);

app.use("/user",UserController);

app.post('/login',handleLogin);

app.post('/logout',handleLogout);

app.post('/register',handleNewUser);

app.listen(1000, () => {0
    console.log("Server started at "+1000)
});