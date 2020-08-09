var mongoose = require("mongoose")

var saleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    size: {
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
    buyer: {
        type: String,
    },
    soldPrice: {
        type: Number,
        required: true
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