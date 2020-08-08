var mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    discordID: {
        type: String,
        required: true
    },
    discordImage: {
        type: String,
        required: true
    }
})

userSchema.virtual("items", {
    ref: "Item",
    localField: "_id",
    foreignField: "author"
})

const User = module.exports = mongoose.model("User", userSchema)