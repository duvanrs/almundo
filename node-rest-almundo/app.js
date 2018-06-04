const express = require('express');
const app = express();

const hotelRoutes = require('./api/routes/hotels');

app.use('/hotels',hotelRoutes);

module.exports = app;
