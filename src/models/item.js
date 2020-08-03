var mongoose = require("mongoose")

var itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    purchasedPrice: {
        type: Number,
        required: true
    },
    purchasedDate: {
        type: String,
        required: true
    },
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        name: String,
    }
})

module.exports = mongoose.model("Item", itemSchema)