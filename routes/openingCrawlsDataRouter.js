const express = require('express');
const { getUniqueWordsWitchCount, getMostPopularPersonInDescriptions } = require('../controllers/contactWithSWAPI/openingCrawlsDataController');

const openingCrawlsDataRouter = express.Router();

openingCrawlsDataRouter
  .get('/word/', getUniqueWordsWitchCount)
  .get('/person', getMostPopularPersonInDescriptions);

module.exports = {
  openingCrawlsDataRouter
}
