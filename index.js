var express = require("express"),
    app = express(),
    sendToLogs = require("./misc/sendToLog")

port = process.env.PORT || 3000

app.set("view engine", "ejs");
app.use(express.static(__dirname + "./public"));

app.get("/", (req, res) => {
    res.render("landing")
})

app.listen(port, () => {
    sendToLogs(`Operating on port: ${port}`)
})