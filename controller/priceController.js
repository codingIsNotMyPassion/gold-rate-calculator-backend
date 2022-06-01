// import asyncHandler Module
const asyncHandler = require("express-async-handler")
//import model
const goldPrice = require("../model/goldPriceModel")

// Read the gold price details
const getGoldPrice = asyncHandler(async (req,res)=>{
    try {
        const prices = await goldPrice.find()
        res.status(200).json(prices)
    } catch (error) {
        console.log(error)
    }
})

// create gold price detais
const postGoldPrice = asyncHandler(async (req,res)=>{
    try {
        const prices = await goldPrice.create({
            "22K":req.body["22K"],
            '24K':req.body["24K"]
        })
        res.status(200).json(prices)
    } catch (error) {
        console.log(error)
    }
})

// update gold prices
const updateGoldPrice = asyncHandler(async (req,res)=>{
    try {
        const price = await goldPrice.findById(req.params.id)
        if(!price){
            res.status(400)
            throw new Error("price not found") 
        }
        const updateGoldPrice = await goldPrice.findByIdAndUpdate(req.params.id,req.body, {new:true}) 
        res.status(200).json(updateGoldPrice)
    } catch (error) {
        console.log(error)
    }
})

// delete gold prices
const deleteGoldPrice = asyncHandler(
    async (req,res)=>{
        try {
            await goldPrice.findByIdAndDelete(req.params.id)
            res.status(200).json("deleted successfully")
        } catch (error) {
            console.log(error)
        }
    }
)

module.exports = {getGoldPrice,postGoldPrice,updateGoldPrice,deleteGoldPrice}