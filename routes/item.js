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

    var newItem = {}

    Item.findById(req.params.id, (err, foundItem) => {
        let formattedDate = getDate()
        const name = foundItem.name;
        const size = foundItem.size;
        const purchasedPrice = foundItem.purchasedPrice;
        const purchasedDate = foundItem.purchasedDate || formattedDate;
        const author = foundItem.author


        var newItem = {
            name,
            size,
            purchasedPrice,
            purchasedDate,
            author
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
            res.redirect("/inventory")
            console.log(`[Data Base] Failed To Delete: ${req.params.id}`)
        } else {
            res.redirect("/inventory")
        }
    })
})

module.exports = router;