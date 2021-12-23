const express = require('express');
const { getAllFilms } = require('../controllers/contactWithSWAPI/filmsController');

const filmsRouter = express.Router();

filmsRouter
  .get('/:page?', getAllFilms);

module.exports = {
  filmsRouter,
}
