const express = require('express');
const { getAllStarships, getOneStarship, getStarshipByName } = require('../controllers/contactWithSWAPI/starshipsController');

const starshipsRouter = express.Router();

starshipsRouter
  .get('/page/:page?', getAllStarships)
  .get('/name/:name', getStarshipByName)
  .get('/id/:id', getOneStarship);

module.exports = {
  starshipsRouter,
};
