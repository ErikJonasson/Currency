const express = require('express')
const router = express.Router()
const User = require('../models/user')


router.post('/register', registerLogger, async (req, res) => {
    const newUser = new User({
        username: req.query.username,
        password: req.query.password,
        email: req.query.email,
        name: req.query.name
    })
    try {
        const user = await newUser.Save()
        res.redirect('/login')
    } catch (error) {
        res.redirect('/register')
    }
    
})

function registerLogger (req, res, next) {
    console.log('Login attempt with username: ' `${req.query.username}`)
    next()
}

module.exports = router