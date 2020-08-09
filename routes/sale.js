const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/user')
const Item = require('../models/item')
const Sale = require('../models/sale')

//new sale
router.post("/", (req, res) => {

    let formattedDate = getDate()

    var newSale = {
        name: req.body.name,
        size: req.body.size,
        purchasedPrice: req.body.price,
        purchasedDate: req.body.date || formattedDate,
        buyer: req.body.buyer,
        soldPrice: req.body.soldPrice,
        profit: req.body.soldPrice - req.body.price,
        author: req.user._id
    }

    Sale.create(newSale, (err, createdSale) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/inventory")
        }
    })
})

//edit sale

//clone sale

//delete sale