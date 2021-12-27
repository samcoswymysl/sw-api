const { swapiModule } = require('../../utils/SWAPI-wrapper');
const { client } = require('../../redis/redis');

const getAllPlanets = async (req, res, next) => {
  const page = req.params.page || 1;

  try {
    const allPlanets = await swapiModule.getPlanets({ page });

    await client.setEx(req.originalUrl, 60 * 60 * 24, JSON.stringify(allPlanet));

    res.json(allPlanets);
  } catch (e) {
    next(e);
  }
};

const getOnePlanet = async (req, res, next) => {
  const { id } = req.params;
  try {
    const onePlanet = await swapiModule.getPlanet(id);

    await client.setEx(req.originalUrl, 60 * 60 * 24, JSON.stringify(onePlanet));

    res.json(onePlanet);
  } catch (e) {
    next(e);
  }
};

const getOnePlanetByName = async (req, res, next) => {
  const { name } = req.params;
  try {
    const planetByName = await swapiModule.getPlanets({ search: name });

    await client.setEx(req.originalUrl, 60 * 60 * 24, JSON.stringify(planetByName));

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
