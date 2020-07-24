var express = require("express"),
    app = express(),
    sendToLogs = require("./misc/sendToLog"),
    favicon = require('serve-favicon'),
    path = require('path')

port = process.env.PORT || 3000

app.set("view engine", "ejs")
app.use(favicon(path.join(__dirname, "public", "images", "Icon2.png")))
app.use(express.static(__dirname + "./public"))

//Routes
app.use('/api/discord', require('./api/discord'))
app.use('/item', require("./routes/item"))

app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "/views/landing.html")
})

app.get("/inventory", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'views', 'inventory.html'))
})

app.listen(port, () => {
    sendToLogs(`Operating on port: ${port}`)
})