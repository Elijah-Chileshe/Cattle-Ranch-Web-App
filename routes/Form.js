const express = require('express');
const router = express.Router();
const liveStock = require('../model/livestockRegSchema')
const mongoose = require ('mongoose');



//View Form Page route
router.get('/',(req, res)=>{
    res.render('./formPage')
});

//post animal data to database
router.post('/', (req, res)=>{
    let livestock = new liveStock ({
        AnimalNumber: req.body.animalNumber,
        Gender: req.body.gender,
        Breed: req.body.breed,
        Weight: req.body.weight,
        Age: req.body.age,
        DateOfBirth: req.body.dateOfBirth
    })
        livestock.save();
        console.log(livestock)
        res.redirect('/form')
});


//Route to retrieve records from database
router.get('/livestock', (req, res)=>{
    liveStock.find((err, list)=>{
        if(!err){
            // console.log(list);
            res.render('./viewPage', {
                animalList: list
            })
        } else {
            console.log(err)
        }
    })
});

router.get('/livestock/delete/:id', (req, res) => {
    liveStock.findByIdAndDelete({_id: req.params.id}, (err, list) => {
        if(err) res.redirect('/');
        else res.redirect('/form/livestock');
    });
});



module.exports = router;