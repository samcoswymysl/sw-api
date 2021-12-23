const { swapiModule } = require('../../utils/SWAPI-wrapper');

const getAllSpecies = async (req, res, next) => {
  const page = req.params.page || 1;

  try {
    const allSpecies = await swapiModule.getAllSpecies({page});


    res.json(allSpecies);
  } catch (e) {
    next(e);
  }
};

const getOneSpecies = async (req, res, next) => {
  const { id } = req.params;
  try {
    const oneSpecies = await swapiModule.getSpecies(id);

    res.json(oneSpecies);
  } catch (e) {
    next(e);
  }
};

const getSpeciesByName = async (req, res, next) => {
  const { name } = req.params;
  try {
    const speciesByName = await swapiModule.getAllSpecies({ search: name });

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
  getAllSpecies,
  getOneSpecies,
  getSpeciesByName
}
