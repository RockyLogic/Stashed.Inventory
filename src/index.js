var express = require("express"),
    app = express(),
    path = require('path'),
    env = require('dotenv').config({ path: path.join(__dirname, '..', '.env') }),
    mongoose = require("mongoose"),
    passport = require("passport"),
    favicon = require('serve-favicon'),
    session = require("express-session"),
    sendToLogs = require("./misc/sendToLog"),
    methodOverride = require("method-override"),
    discordStrategy = require('./strategies/discordstrategy')

port = process.env.PORT || 3000
const redirect = process.env.REDIRECT
console.log(redirect);
// Connects to database
mongoose.connect("mongodb://localhost:27017/StashedInventory", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


//NPM setup
app.set("view engine", "ejs")
app.use(methodOverride("_method"));
app.use(favicon(path.join(__dirname, "public", "images", "Icon2.png")))
app.use(express.static(__dirname + "./public"))

//Session setup
app.use(session({
    secret: 'StashedCovid19',
    cookie: {
        maxAge: 60000 * 60 * 24
    },
    saveUninitialized: false
}))

//Passport setup
app.use(passport.initialize())
app.use(passport.session())

//Routes
app.use('/discord', require('./routes/discord'))
app.use('/item', require("./routes/item"))


//Routes

// Home page
app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "/views/landing.html")
})

// Inventory
app.get("/inventory", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'views', 'inventory.html'))
})

// Initate
app.listen(port, () => {
    sendToLogs(`Operating on port: ${port}`)
})