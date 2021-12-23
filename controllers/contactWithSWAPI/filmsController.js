const { swapiModule } = require('../../utils/SWAPI-wrapper');

const getAllFilms = async (req, res, next) => {
  const page = req.params.page || 1;
  console.log(page);
  try {
    const allFilms = await swapiModule.getFilms({ page });

    res.json(allFilms);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAllFilms,
};
