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
        type: Date,
        default: Date.now
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("Item", itemSchema)