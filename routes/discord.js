const router = require('express').Router();
const passport = require('passport');
const isLoggedIn = require('../middleware/index')

router.get('/login', isLoggedIn, passport.authenticate('discord'))
router.get('/redirect', passport.authenticate('discord', {
    successRedirect: '/inventory',
    failureRedirect: '/forbidden',
}), (req, res) => {
})

module.exports = router