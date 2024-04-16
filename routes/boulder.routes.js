const express = require('express')
const router = express.Router()

const Boulder = require('../models/Boulder.model')
const Section = require('../models/Section.model')

router.post('/create', async (req, res, next) => {
    const { name, grade, description, path, imageRef, sectionId } = req.body
    try {
        const createdBoulder = await Boulder.create({ name, grade, description, path, imageRef })
        await Section.findOneAndUpdate(
            { _id: sectionId },
            { $push: { boulders: createdBoulder._id } },
            { new: true }
        )
        if (createdBoulder) {
            res.status(200).json({ message: "Boulder Created" })
        }
    }
    catch (error) {
        // Handle error
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports = router;