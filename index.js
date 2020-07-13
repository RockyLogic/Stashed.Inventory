var express = require("express"),
    app = express(),
    sendToLogs = require("./misc/sendToLog"),
    favicon = require('serve-favicon'),
    path = require('path')

port = process.env.PORT || 3000

app.use(favicon(path.join(__dirname, "public", "images", "Icon2.png")))
app.set("view engine", "ejs");
app.use(express.static(__dirname + "./public"));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/landing.html")
})

app.listen(port, () => {
    sendToLogs(`Operating on port: ${port}`)
})