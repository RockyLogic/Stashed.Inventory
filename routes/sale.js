const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/user')
const Item = require('../models/item')
const Sale = require('../models/sale')

//new sale
router.post("/", (req, res) => {

    var newSale = {
        name: req.body.name,
        size: req.body.size,
        purchasedPrice: req.body.price,
        purchasedDate: req.body.date,
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

//clone sale
router.post("/:id/clone", (req, res) => {

    Sale.findById(req.params.id, (err, foundSale) => {
        const newSale = {
            name: foundSale.name,
            size: foundSale.size,
            purchasedPrice: foundSale.purchasedPrice,
            purchasedDate: foundSale.purchasedDate,
            buyer: foundSale.buyer,
            soldPrice: foundSale.soldPrice,
            profit: foundSale.profit,
            author: foundSale.author
        }

        Sale.create(newSale, (err, createdSale) => {
            if (err) {
                console.log(err);
            } else {
                res.redirect("/inventory")
            }
        })
    })
})

//patch sale
router.patch("/:id", (req, res) => {
    Sale.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        size: req.body.size,
        purchasedPrice: req.body.price,
        purchasedDatte: req.body.date,
        buyer: req.body.buyer,
        soldPrice: req.body.soldPrice,
        profit: req.body.soldPrice - req.body.price,
    }, (err, updatedSale) => {
        if (err) {
            console.log(err)
        }
        res.redirect("/inventory")
    })
})

//delete sale
router.delete("/:id", (req, res) => {
    Sale.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            console.log(`[Data Base] Failed To Delete Sale: ${req.params.id}`)
            res.redirect("/inventory")
        } else {
            res.redirect("/inventory")
        }
    })
})


module.exports = router;