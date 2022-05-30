//import modules
const express = require ('express');
const mongoose = require ('mongoose')

//Create livestock Schema
const livestockSchema = ({

    AnimalNumber: Number,
    Gender: String,
    Breed: String,
    Weight: Number,
    Age: Number,
    DateOfBirth: Date

})

const liveStock = mongoose.model('liveStock', livestockSchema);

module.exports = liveStock;