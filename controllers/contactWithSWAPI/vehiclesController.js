const { swapiModule } = require('../../utils/SWAPI-wrapper');

const getAllVehicles = async (req, res, next) => {
  const page = req.params.page || 1;

  try {
    const allVehicles = await swapiModule.getVehicles({ page });

    res.json(allVehicles);
  } catch (e) {
    next(e);
  }
};

const getOneVehicle = async (req, res, next) => {
  const { id } = req.params;
  try {
    const oneVehicle = await swapiModule.getVehicle(id);

    res.json(oneVehicle);
  } catch (e) {
    next(e);
  }
};

const getVehiclesByName = async (req, res, next) => {
  const { name } = req.params;
  try {
    const vehicleByName = await swapiModule.getVehicles({ search: name });

    if (!vehicleByName.results.length) {
      res.json('Any results');
      return;
    }

    res.json(vehicleByName);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAllVehicles,
  getOneVehicle,
  getVehiclesByName,

};
