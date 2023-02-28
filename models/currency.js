const mongoose = require('mongoose')

const currencySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Currency', currencySchema);