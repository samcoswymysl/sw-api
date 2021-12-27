const { client } = require('../redis/redis');

async function checkCache(req, res, next) {
  const key = req.originalUrl;
  const cache = await client.get(key);
  if (!cache) {
    next();
  } else {
    (
      res.json(JSON.parse(cache))
    );
  }
}

module.exports = {
  checkCache,
};
