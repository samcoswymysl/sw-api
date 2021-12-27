const { swapiModule } = require('../../utils/SWAPI-wrapper');
const { client } = require('../../redis/redis');

const getAllVehicles = async (req, res, next) => {
  const page = req.params.page || 1;

  try {
    const allVehicles = await swapiModule.getVehicles({ page });

    await client.setEx(req.originalUrl, 60 * 60 * 24, JSON.stringify(allVehicles));

    res.json(allVehicles);
  } catch (e) {
    next(e);
  }
};

const getOneVehicle = async (req, res, next) => {
  const { id } = req.params;
  try {
    const oneVehicle = await swapiModule.getVehicle(id);

    await client.setEx(req.originalUrl, 60 * 60 * 24, JSON.stringify(oneVehicle));

    res.json(oneVehicle);
  } catch (e) {
    next(e);
  }
};

const getVehiclesByName = async (req, res, next) => {
  const { name } = req.params;
  try {
    const vehicleByName = await swapiModule.getVehicles({ search: name });

    await client.setEx(req.originalUrl, 60 * 60 * 24, JSON.stringify(vehicleByName));

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
