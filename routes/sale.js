const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/user')
const Item = require('../models/item')
const Sale = require('../models/sale')

//new sale
router.post("/", (req, res) => {

    let formattedPurchasePrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(req.body.price.replace(/,/g, ""))
    let formattedSoldPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(req.body.soldPrice.replace(/,/g, ""))
    //removes the currency sign
    formattedPurchasePrice = formattedPurchasePrice.substring(1, formattedPurchasePrice.length)
    formattedSoldPrice = formattedSoldPrice.substring(1, formattedSoldPrice.length)

    //calc profit
    let formattedProfit = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(parseFloat(formattedSoldPrice.replace(/,/g, "")) - parseFloat(formattedPurchasePrice.replace(/,/g, "")))
    formattedProfit = formattedProfit.substring(1, formattedProfit.length)

    var newSale = {
        name: req.body.name,
        size: req.body.size,
        purchasedPrice: formattedPurchasePrice,
        purchasedDate: req.body.date,
        buyer: req.body.buyer,
        soldPrice: formattedSoldPrice,
        profit: formattedProfit,
        author: req.user._id
    }

    Sale.create(newSale, (err, createdSale) => {
        if (err) {
            console.log(err);
            res.redirect("/inventory")
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
                res.redirect("/inventory")
            } else {
                res.send(createdSale)
            }
        })
    })
})

//patch sale
router.patch("/:id", (req, res) => {

    let formattedPurchasePrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(req.body.price.replace(/,/g, ""))
    let formattedSoldPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(req.body.soldPrice.replace(/,/g, ""))

    //removes the currency sign
    formattedPurchasePrice = formattedPurchasePrice.substring(1, formattedPurchasePrice.length)
    formattedSoldPrice = formattedSoldPrice.substring(1, formattedSoldPrice.length)

    //calc profit
    let formattedProfit = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(parseFloat(formattedSoldPrice.replace(/,/g, "")) - parseFloat(formattedPurchasePrice.replace(/,/g, "")))
    formattedProfit = formattedProfit.substring(1, formattedProfit.length)

    Sale.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        size: req.body.size,
        purchasedPrice: formattedPurchasePrice,
        purchasedDate: req.body.date,
        buyer: req.body.buyer,
        soldPrice: formattedSoldPrice,
        profit: formattedProfit,
    }, (err, updatedSale) => {
        if (err) {
            console.log(err);
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

// Sell Item
router.post("/:id/sell", (req, res) => {
    const itemId = req.params.id
    Item.findById(itemId, (err, foundItem) => {

        let formattedSoldPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(req.body.soldPrice)
        //removes the currency sign
        formattedSoldPrice = formattedSoldPrice.substring(1, formattedSoldPrice.length)
        //calc profit
        let formattedProfit = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(formattedSoldPrice - foundItem.purchasedPrice)
        formattedProfit = formattedProfit.substring(1, formattedProfit.length)

        var newSale = {
            name: foundItem.name,
            size: foundItem.size,
            purchasedPrice: foundItem.purchasedPrice,
            purchasedDate: foundItem.purchasedDate,
            buyer: req.body.buyer,
            soldPrice: formattedSoldPrice,
            profit: formattedProfit,
            author: foundItem.author
        }
        Sale.create(newSale, (err, createdSale) => {
            if (err) {
                console.log(err);
                res.redirect("/inventory")
            } else {
                Item.findByIdAndDelete(itemId, (err) => {
                    if (err) {
                        console.log(err)
                    }
                    res.redirect("/inventory")
                })
            }
        })
    })
})

module.exports = router;