const express = require('express')
const router = express.Router()

router.post('/login', loginLogger, async (req, res) => {
    const searchOptions = {username: req.query.username}
    const currencies = await User.find(searchOptions)
    if (currencies) {
        console.log('Check if password is correct')
    } else {
        console.log('Show error, wrong username')
    }
})

function loginLogger (req, res, next) {
    console.log('Login attempt with username: ' `${req.query.username}`)
    next()
}

module.exports = router