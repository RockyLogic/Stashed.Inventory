const path = require('path')
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/user')
const Item = require('../models/item')
const getDate = require('../misc/getDate')

require(`dotenv`).config();

//Creates db with mongoose 
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// new item
router.post("/", (req, res) => {

    let formattedDate = getDate()
    const name = req.body.name;
    const size = req.body.size;
    const purchasedPrice = req.body.price;
    const purchasedDate = req.body.date || formattedDate;
    const author = req.user._id


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