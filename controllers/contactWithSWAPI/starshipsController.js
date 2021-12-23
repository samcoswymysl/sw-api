const { swapiModule } = require('../../utils/SWAPI-wrapper');

const getAllStarships = async (req, res, next) => {
  const page = req.params.page || 1;

  try {
    const allStarships = await swapiModule.getStarships({ page });

    res.json(allStarships);
  } catch (e) {
    next(e);
  }
};

const getOneStarship = async (req, res, next) => {
  const { id } = req.params;
  console.log(id)
  try {
    const oneStarship = await swapiModule.getStarship(id);

    res.json(oneStarship);
  } catch (e) {
    next(e);
  }
};

const getStarshipByName = async (req, res, next) => {
  const { name } = req.params;
  try {
    const starshipByName = await swapiModule.getStarships({ search: name });

    if (!starshipByName.results.length) {
      res.json('Any results');
      return;
    }

    res.json(starshipByName);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAllStarships,
  getOneStarship,
  getStarshipByName,

};
