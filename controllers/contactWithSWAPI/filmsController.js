const { swapiModule } = require('../../utils/SWAPI-wrapper');
const { client } = require('../../redis/redis');

const getAllFilms = async (req, res, next) => {
  const page = req.params.page || 1;
  try {
    const allFilms = await swapiModule.getFilms({ page });

    await client.setEx(req.originalUrl, 60 * 60 * 24, JSON.stringify(allFilms));

    res.json(allFilms);
  } catch (e) {
    next(e);
  }
};

const getOneFilm = async (req, res, next) => {
  const { id } = req.params;
  try {
    const oneFilm = await swapiModule.getFilm(id);

    await client.setEx(req.originalUrl, 60 * 60 * 24, JSON.stringify(oneFilm));

    res.json(oneFilm);
  } catch (e) {
    next(e);
  }
};

const getFilmByTitle = async (req, res, next) => {
  const { title } = req.params;
  try {
    const filmByTitle = await swapiModule.getFilms({ search: title });

    await client.setEx(req.originalUrl, 60 * 60 * 24, JSON.stringify(filmByTitle));

    res.json(filmByTitle);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAllFilms,
  getOneFilm,
  getFilmByTitle,
};
