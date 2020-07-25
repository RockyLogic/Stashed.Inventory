const router = require('express').Router();
const passport = require('passport');
const { route } = require('./item');

router.get('/login', passport.authenticate('discord'))
router.get('/redirect', passport.authenticate('discord', {
    failureRedirect: '/forbidden',
}), (req, res) => {
    res.send(200);
})
module.exports = router