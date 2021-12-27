const { swapiModule } = require('../../utils/SWAPI-wrapper');
const {client} = require("../../redis/redis");

const getAllStarships = async (req, res, next) => {
  const page = req.params.page || 1;

  try {
    const allStarships = await swapiModule.getStarships({ page });

    await client.setEx(req.originalUrl, 60 * 60 * 24, JSON.stringify(allStarships));

    res.json(allStarships);
  } catch (e) {
    next(e);
  }
};

const getOneStarship = async (req, res, next) => {
  const { id } = req.params;
  try {
    const oneStarship = await swapiModule.getStarship(id);

    await client.setEx(req.originalUrl, 60 * 60 * 24, JSON.stringify(oneStarship));

    res.json(oneStarship);
  } catch (e) {
    next(e);
  }
};

const getStarshipByName = async (req, res, next) => {
  const { name } = req.params;
  try {
    const starshipByName = await swapiModule.getStarships({ search: name });

    await client.setEx(req.originalUrl, 60 * 60 * 24, JSON.stringify(starshipByName));

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
