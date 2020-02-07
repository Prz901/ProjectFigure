const Banana = require('../../models/models-moongose/Banana')

const bananaDelete = async (req, res) => {
    try {
        await Banana.findByIdAndDelete(req.params.id)
        res.status(200).send('Success deleted')
    }
    catch (err) {
        return res.status(500).send('Error' + err)
    }
}

module.exports = bananaDelete