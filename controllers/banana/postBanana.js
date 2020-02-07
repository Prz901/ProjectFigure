const Banana = require('../../models/models-moongose/Banana')

const createBanana = async (req, res) => {
    try {
        const banana = new Banana(req.body)
        await banana.save()
        res.status(201).send('Success')
    }
    catch (err) {
        return res.status(500).send('Error' + err)
    }
}

module.exports = createBanana