const { swapiModule } = require('../../utils/SWAPI-wrapper');

const getAllFilms = async (req, res, next) => {
  const page = req.params.page || 1;
  try {
    const allFilms = await swapiModule.getFilms({ page });

    res.json(allFilms);
  } catch (e) {
    next(e);
  }
};

const getOneFilm = async (req, res, next) => {
  const { id } = req.params;
  try {
    const oneFilm = await swapiModule.getFilm(id);

    res.json(oneFilm);
  } catch (e) {
    next(e);
  }
};

const getFilmByTitle = async (req, res, next) => {
  const { title } = req.params;
  try {
    const filmByTitle = await swapiModule.getFilms({ search: title  });
    console.log(title)
    if (!filmByTitle.results.length) {
      res.json('Any results');
      return;
    }

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
