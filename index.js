var express = require("express"),
    app = express(),
    sendToLogs = require("./misc/sendToLog"),
    favicon = require('serve-favicon'),
    path = require('path')

port = process.env.PORT || 3000

app.use(favicon(path.join(__dirname, "public", "images", "Icon2.png")))
app.set("view engine", "ejs");
app.use(express.static(__dirname + "./public"));

app.use('/api/discord', require('./api/discord'));

app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "/views/landing.html")
})

app.get("/inventory", (req, res) => {
    res.status(200).render("inventory")
})
app.listen(port, () => {
    sendToLogs(`Operating on port: ${port}`)
})