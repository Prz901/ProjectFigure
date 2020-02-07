// Express imports
const express = require('express'),
    router = express.Router()

// handler pega todas as configuraçoes de rota junto das funçoes da rota.
const banana = require('./banana/bananaHandler')

const hasParams = require('../middleware/hasParams')
// Routes in use

router.use('/banana', hasParams, banana)
// 404 setup
router.use('*', (req, res) => {
    res.status(404).send('Page Not Found')
})

module.exports = router
