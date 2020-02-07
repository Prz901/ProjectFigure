const Banana = require('../../models/models-moongose/Banana')

const updateBanana = async (req, res) => {
    try {
        const { id } = req.params
        const banana = req.body
        await Banana.findByIdAndUpdate(id, {
            $set: banana
        }, { new: true })
        return await res.status(200).send('Success')
    }
    catch (err) {
        return res.status(500).send('Error')
    }
}

module.exports = updateBanana