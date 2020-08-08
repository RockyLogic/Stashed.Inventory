const DiscordStrategy = require('passport-discord').Strategy;
const passport = require('passport');
const User = require('../models/user');

passport.serializeUser(function (user, done) {
    done(null, user.id)
});

passport.deserializeUser(async function (id, done) {
    await User.findById(id, (error, user) => {
        if (user)
            done(null, user);
    });
});

passport.use(new DiscordStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CLIENT_REDIRECT,
    scope: ['identify', 'guilds']
}, async (accessToken, refreshToken, profile, done) => {
    try {
        User.findOne({ discordID: profile.id }, async (error, user) => {
            if (user) {
                done(null, user) //creates the session with user
            } else {
                const newUser = await User.create({
                    name: profile.username + "#" + profile.discriminator,
                    discordID: profile.id,
                    discordImage: "https://cdn.discordapp.com/avatars/" + profile.id + "/" + profile.avatar,
                    items: []
                })
                const savedUser = await newUser.save()
                done(null, savedUser)
            }
        })
    } catch (error) {
        console.log(eror)
        done(error, null)
    }
}))