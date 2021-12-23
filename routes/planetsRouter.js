const express = require('express');
const { getAllPlanets, getOnePlanetByName, getOnePlanet } = require('../controllers/contactWithSWAPI/planetsController');

const planetsRouter = express.Router();

planetsRouter
  .get('/page/:page?', getAllPlanets)
  .get('/name/:name', getOnePlanetByName)
  .get('/id/:id', getOnePlanet);

module.exports = {
  planetsRouter,
};
