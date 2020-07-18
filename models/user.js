var mongoose = require("mongoose")

var userSchema = mongoose.Schema({
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

module.exports = mongoose.model("User", userSchema)