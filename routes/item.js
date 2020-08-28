const express = require('express')
const router = express.Router()
const Item = require('../models/item')
const getDate = require('../misc/getDate')
const { create } = require('../models/item')

// new item
router.post("/", (req, res) => {

    let formattedDate = getDate()
    let formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(req.body.price)

    //removes the currency sign
    formattedPrice = formattedPrice.substring(1, formattedPrice.length)

    var newItem = {
        name: req.body.name,
        size: req.body.size,
        purchasedPrice: formattedPrice,
        purchasedDate: req.body.date || formattedDate,
        author: req.user._id
    }

    Item.create(newItem, (err, createdItem) => {
        if (err) {
            console.log(err);
            res.redirect("/inventory")
        } else {
            res.redirect("/inventory")
        }
    })
})


//clone item
router.post("/:id/clone", (req, res) => {

    Item.findById(req.params.id, (err, foundItem) => {

        var newItem = {
            name: foundItem.name,
            size: foundItem.size,
            purchasedPrice: foundItem.purchasedPrice,
            purchasedDate: foundItem.purchasedDate,
            author: foundItem.author
        }

        Item.create(newItem, (err, createdItem) => {
            if (err) {
                console.log(err);
                res.redirect("/inventory")
            } else {
                res.send(createdItem)
            }
        })
    })
})

// update
router.patch("/:id", (req, res) => {
    let formattedPurchasePrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(req.body.price.replace(/,/g, ""))
    formattedPurchasePrice = formattedPurchasePrice.substring(1, formattedPurchasePrice.length)

    Item.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        size: req.body.size,
        purchasedPrice: formattedPurchasePrice,
        purchasedDate: req.body.date
    }, (err, updatedItem) => {
        if (err) {
            console.log(err);
            res.redirect("/inventory")
        }
        res.redirect("/inventory")
    })
})

router.delete("/:id", (req, res) => {
    Item.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            console.log(`[Data Base] Failed To Delete Item: ${req.params.id}`)
            res.redirect("/inventory")
        } else {
            res.redirect("/inventory")
        }
    })
})

module.exports = router;