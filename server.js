const express = require('express');
const formRouter = require('./routes/submitForm');
const mongoose = require('mongoose');
const liveStockSchema = require('./model/livestockRegSchema');
const bodyParser = require('body-parser');
const app = express();

//set ejs as view engine
app.set('view engine','ejs');
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
app.use('/form', formRouter);



app.listen(5000, ()=>{
    console.log('Server is running on port 5000')
})

