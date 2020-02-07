// Express imports
const express = require('express'),
    router = express.Router()

// Controller import
const getBanana = require('./getBanana')
const postBanana = require('./postBanana')
const getAllBanana = require('./getAllBanana')

const updateBanana = require('./updateBanana')
const deleteBanana = require('./deleteBanana')

// trocar nome é patch, trocar a estrutura do objeto é put
const hasParams = require('../../middleware/hasParams')

router.get('/:id', getBanana)
router.post('/', hasParams, postBanana)
router.get('/', hasParams, getAllBanana)

router.delete('/:id', hasParams, deleteBanana)
router.patch('/:id', updateBanana)


module.exports = router

