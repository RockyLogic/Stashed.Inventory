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
        type: String,
        required: true
    },
    purchasedDate: {
        type: String,
        required: true
    },
    buyer: {
        type: String,
        required: true
    },
    soldPrice: {
        type: String,
        required: true
    },
    profit: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("Sale", saleSchema)