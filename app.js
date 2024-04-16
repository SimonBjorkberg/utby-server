require('dotenv').config();
require('./db')

const express = require('express')
const app = express();

require('./config')(app)

const zoneRoutes = require('./routes/zone.routes')
app.use("/zone", zoneRoutes)

const sectionRoutes = require('./routes/section.routes')
app.use('/section', sectionRoutes)

const boulderRoutes = require('./routes/boulder.routes')
app.use('/boulder', boulderRoutes)

module.exports = app;

