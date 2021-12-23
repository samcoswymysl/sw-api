const { swapiModule } = require('../../utils/SWAPI-wrapper');

const getAllPlanets = async (req, res, next) => {
  const page = req.params.page || 1;

  try {
    const allPlanets = await swapiModule.getPlanets({ page });

    res.json(allPlanets);
  } catch (e) {
    next(e);
  }
};

const getOnePlanet = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    const onePlanet = await swapiModule.getPlanet(id);

    res.json(onePlanet);
  } catch (e) {
    next(e);
  }
};

const getOnePlanetByName = async (req, res, next) => {
  const { name } = req.params;
  try {
    const planetByName = await swapiModule.getPlanets({ search: name });

    if (!planetByName.results.length) {
      res.json('Any results');
      return;
    }

    res.json(planetByName);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAllPlanets,
  getOnePlanet,
  getOnePlanetByName,

};
