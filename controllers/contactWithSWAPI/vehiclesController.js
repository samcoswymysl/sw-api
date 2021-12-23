const { swapiModule } = require('../../utils/SWAPI-wrapper');

const getAllVehicles = async (req, res, next) => {
  const page = req.params.page || 1;

  try {
    const allSpecies = await swapiModule.getVehicles({ page });

    res.json(allSpecies);
  } catch (e) {
    next(e);
  }
};

const getOneVehicle = async (req, res, next) => {
  const { id } = req.params;
  try {
    const oneSpecies = await swapiModule.getVehicle(id);

    res.json(oneSpecies);
  } catch (e) {
    next(e);
  }
};

const getVehiclesByName = async (req, res, next) => {
  const { name } = req.params;
  try {
    const speciesByName = await swapiModule.getVehicles({ search: name });

    if (!speciesByName.results.length) {
      res.json('Any results');
      return;
    }

    res.json(speciesByName);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAllVehicles,
  getOneVehicle,
  getVehiclesByName,

};
