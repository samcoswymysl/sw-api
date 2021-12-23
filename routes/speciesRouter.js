const express = require('express');
const { getOneSpecies, getAllSpecies, getSpeciesByName } = require('../controllers/contactWithSWAPI/speciesController');

const speciesRouter = express.Router();

speciesRouter
  .get('/page/:page?', getAllSpecies)
  .get('/name/:name', getSpeciesByName)
  .get('/id/:id', getOneSpecies);

module.exports = {
  speciesRouter,
};
