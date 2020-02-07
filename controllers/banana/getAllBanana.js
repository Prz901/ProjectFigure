const Banana = require('../../models/models-moongose/Banana')

const getAll = async (req, res) => {
    try {
        const banana = await Banana.find({})
        if (banana.length > 0) {
            res.status(200).send(banana)
        }
        else {
            res.status(404).send('No banana Found')
        }
    }
    catch (err) {
        return res.status(500).send('Error')
    }
}


module.exports = getAll