const mongoose = require('mongoose')

module.exports = mongoose.model('Banana', {
    name: {
        type: String,
        required: true,
    }
})