const express = require('express')
const router = express.Router()
const fileUploader = require("../config/cloudinary.config");

const Section = require('../models/Section.model')
const Zone = require('../models/Zone.model')

router.post('/create', async (req, res, next) => {
    const { name, position, uploadedImages, zone } = req.body
    console.log("reqbody", name, position, uploadedImages, zone);
    try {
        const createdSection = await Section.create({ name, position, images: uploadedImages })
        console.log("createdSection", createdSection)
        await Zone.findOneAndUpdate(
            { name: zone },
            { $push: { sections: createdSection._id } },
            { new: true }
        )
        if (createdSection) {
            res.status(200).json({ message: "Section Created" })
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.get('/all', async (req, res, next) => {
    try {
        const allSections = await Section.find({}).populate('boulders')
        if (allSections) {
            res.status(200).json(allSections)
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.get('/one/:id', async (req, res, next) => {
    const { id } = req.params
    try {
        const oneSection = await Section.findById(id).populate('boulders')
        if (oneSection) {
            res.status(200).json(oneSection)
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.post("/upload", fileUploader.single("imageUrl"), (req, res, next) => {
    if (!req.file) {
      return res.json({ message: "no file added" });
    }
    return res.json({ fileUrl: req.file.path, message: "image uploaded" });
  });

module.exports = router;