const express = require('express');
const cors = require('cors');

module.exports = (app) => {
    app.set('trusty proxy', 1)

    app.use(
        cors({
            origin: process.env.ORIGIN,
            methods: ['GET', 'POST'],
        })
    )
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
}