const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Item = require('../models/item')
const getDate = require('../misc/getDate')

// new item
router.post("/", (req, res) => {

    let formattedDate = getDate()

    var newItem = {
        name: req.body.name,
        size: req.body.size,
        purchasedPrice: req.body.price,
        purchasedDate: req.body.date || formattedDate,
        author: req.user._id
    }

    Item.create(newItem, (err, createdItem) => {
        if (err) {
            console.log(err);
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
            } else {
                res.redirect("/inventory")
            }
        })
    })
})

// update
router.patch("/:id", (req, res) => {
    Item.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        size: req.body.size,
        purchasedPrice: req.body.price,
        purchasedDatte: req.body.date
    }, (err, updatedItem) => {
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