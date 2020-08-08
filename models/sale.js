var mongoose = require("mongoose")

var saleSchema = mongoose.Schema({
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
    soldPrice: {
        type: Number,
        required: true
    },
    soldDate: {
        type: Date,
        default: Date.now
    },
    profit: {
        type: Number,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("Sale", saleSchema)