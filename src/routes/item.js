const path = require('path')
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/user')
const Item = require('../models/item')

require(`dotenv`).config();

//Creates db with mongoose 
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// new item
router.post("/", (req, res) => {

    let now = new Date()
    let formattedDate = now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear()
    var name = req.body.name;
    var purchasedPrice = req.body.price;
    var purchasedDate = req.body.date || formattedDate;
    var author = {
        id: req.user._id,
        name: req.user.name
    }

    var newItem = {
        name,
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
    console.log("New Item Created")
})

// update
router.patch("/:id", (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body.item, (err, updatedItem) => {
        res.redirect()
    })
})

router.delete("/:id/delete", (req, res) => {
    Item.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            res.redirect("/inventory")
            console.log(`[Data Base] Failed To Delete: ${req.params.id}`);
        } else {
            res.redirect("/inventory")
            console.log(`[Data Base] Successfully Deleted: ${req.params.id}`);
        }
    })
})

module.exports = router;