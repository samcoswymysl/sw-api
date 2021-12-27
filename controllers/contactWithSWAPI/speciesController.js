const { swapiModule } = require('../../utils/SWAPI-wrapper');
const { client } = require('../../redis/redis');

const getAllSpecies = async (req, res, next) => {
  const page = req.params.page || 1;

  try {
    const allSpecies = await swapiModule.getAllSpecies({ page });

    await client.setEx(req.originalUrl, 60 * 60 * 24, JSON.stringify(allSpecies));

    res.json(allSpecies);
  } catch (e) {
    next(e);
  }
};

const getOneSpecies = async (req, res, next) => {
  const { id } = req.params;
  try {
    const oneSpecies = await swapiModule.getSpecies(id);

    await client.setEx(req.originalUrl, 60 * 60 * 24, JSON.stringify(oneSpecies));

    res.json(oneSpecies);
  } catch (e) {
    next(e);
  }
};

const getSpeciesByName = async (req, res, next) => {
  const { name } = req.params;
  try {
    const speciesByName = await swapiModule.getAllSpecies({ search: name });

    await client.setEx(req.originalUrl, 60 * 60 * 24, JSON.stringify(speciesByName));

    res.json(speciesByName);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAllSpecies,
  getOneSpecies,
  getSpeciesByName,
};
