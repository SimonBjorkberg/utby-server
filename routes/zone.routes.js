const express = require('express')
const router = express.Router()

const Zone = require('../models/Zone.model')

router.post('/create', async (req, res, next) => {
    const { name } = req.body
    try {
        const createdZone = await Zone.create({ name })
        if (createdZone) {
            res.status(200).json({ message: "Zone Created" })
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports = router;