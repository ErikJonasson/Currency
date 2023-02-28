const express = require('express')
const router = express.Router()
const Currency = require('../models/currency')

router.get('/new', (req, res) => {
    res.render('currency/new', {currency: new Currency()})
})

router.post('/', async (req, res) => {
    const currency = new Currency({
        name: req.body.name,
        id: req.body.id,
        description: req.body.description
    })
    try {
        await currency.save()
        res.redirect('currency')
    } catch (err) {
        res.render('currency/new', {
            currency: currency,
            errorMessage: 'Error creating currency'
        })
    }
    })

router.get('/', async (req, res) => {
    let searchOptions = {}
    if (req.query.name != null && req.query.name !== '') {
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try {
        const currencies = await Currency.find(searchOptions)
        res.render('currency/index', {
            currencies: currencies,
            searchOptions: req.query})
    } catch {
        res.redirect('/')
    }
}) 

module.exports = router