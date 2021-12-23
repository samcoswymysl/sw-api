const express = require('express');
const { getAllVehicles, getVehiclesByName, getOneVehicle } = require('../controllers/contactWithSWAPI/vehiclesController');

const vehiclesRouter = express.Router();

vehiclesRouter
  .get('/page/:page?', getAllVehicles)
  .get('/name/:name', getVehiclesByName)
  .get('/id/:id', getOneVehicle);

module.exports = {
  vehiclesRouter,
};
