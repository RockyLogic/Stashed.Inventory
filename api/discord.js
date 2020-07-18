const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const mongoose = require('mongoose');
const { catchAsync } = require('../misc/catchAsync');

require(`dotenv`).config();

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const redirect = 'http://localhost:3000/api/discord/callback'

//Creates yelp_camp db with mongoose 
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

router.get('/login', (req, res) => {
    res.redirect(`https://discordapp.com/api/oauth2/authorize?client_id=${CLIENT_ID}&scope=identify&response_type=code&redirect_uri=${redirect}`);
});

router.get('/callback', catchAsync(async (req, res) => {
    if (!req.query.code) throw new Error('NoCodeProvided');
    const code = req.query.code;
    const FormData = require('form-data')

    const data = new FormData()

    data.append('client_id', CLIENT_ID)
    data.append('client_secret', CLIENT_SECRET)
    data.append('grant_type', 'authorization_code')
    data.append('redirect_uri', redirect)
    data.append('scope', 'identify email')
    data.append('code', code)

    const response = await fetch('https://discordapp.com/api/oauth2/token', {
        method: 'POST',
        body: data,
    })

    const json = await response.json();
    console.log(json)

    const userInfoJSON = await fetch('https://discordapp.com/api/users/@me', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${json.access_token}`
        }
    })
    const userInfo = await userInfoJSON.json();
    console.log(userInfo);
    res.redirect(`/`);
}));

module.exports = router;