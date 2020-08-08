const router = require('express').Router();
const passport = require('passport');

router.get('/login', passport.authenticate('discord'))
router.get('/redirect', passport.authenticate('discord', {
    successRedirect: '/inventory',
    failureRedirect: '/forbidden',
}), (req, res) => {
})

module.exports = router