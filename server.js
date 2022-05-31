const express = require('express');
const formRouter = require('./routes/Form');
const mongoose = require('mongoose');
const liveStockSchema = require('./model/livestockRegSchema');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

//set ejs as view engine
app.set('view engine','ejs');

//setup for public folder
app.use(express.static(path.join(__dirname, 'public')));

//setup for bodyParser
app.use(bodyParser.urlencoded({extended: true}));

//use dotenv to access db
require("dotenv").config();

//Connect MongoDB 
mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log('Sucessfully connected to the Database')
}).catch((err)=>{
    console.log(err)
});

//ROUTES
//display welcome page
app.get('/', (req, res)=>{
    res.render('./welcomePage')
});
app.use('/form', formRouter);



//Port for server to listen on
app.listen(5000, ()=>{
    console.log('Server is running on port 5000')
});

