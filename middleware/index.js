isLoggedIn = function (req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    } else {
        res.redirect("/inventory")
    }
}

module.exports = isLoggedIn;
