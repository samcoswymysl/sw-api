const express = require('express');
const { getAllFilms, getOneFilm, getFilmByTitle } = require('../controllers/contactWithSWAPI/filmsController');

const filmsRouter = express.Router();

filmsRouter
  .get('/page/:page?', getAllFilms)
  .get('/title/:title', getFilmByTitle)
  .get('/id/:id', getOneFilm);

module.exports = {
  filmsRouter,
};
