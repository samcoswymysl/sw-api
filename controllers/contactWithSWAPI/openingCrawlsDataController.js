const { swapiModule } = require('../../utils/SWAPI-wrapper');
const { client } = require('../../redis/redis');

const getOpeningCrawls = async () => {
  const { results } = await swapiModule.getFilms();
  return results.map((oneFilm) => oneFilm.opening_crawl);
};

const getPeople = async (page, table) => {
  const peopleArr = table || [];
  const { results } = (await swapiModule.getPeople({ page }));
  if (results) {
    peopleArr.push(...results);
    const nextPageWitchPeople = await getPeople(++page, peopleArr);
    if (nextPageWitchPeople) {
      results.push(nextPageWitchPeople.results);
    }
  }
  return peopleArr;
};

const occurrences = (string, subString, allowOverlapping) => {
  string += '';
  subString += '';
  if (subString.length <= 0) return (string.length + 1);

  let n = 0;
  let pos = 0;
  const step = allowOverlapping ? 1 : subString.length;

  while (true) {
    pos = string.indexOf(subString, pos);
    if (pos >= 0) {
      ++n;
      pos += step;
    } else break;
  }
  return n;
};

const getOpeningCrawlSetWitchCount = (allFilmsOpeningCrawlArray) => {
  const xxx = allFilmsOpeningCrawlArray
    .join(',')
    .replace(/[.,!?]/g, '  ')
    .replace(/(?:\\[rn]|[\r\n]+)+/g, '  ')
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .split(' ')
    .reduce((hash, word) => {
      hash[word] = hash[word] || 0;
      hash[word]++;
      return hash;
    }, {});

  return xxx;
};

const getUniqueWordsWitchCount = async (req, res, next) => {
  try {
    const allFilmsOpeningCrawlArray = await getOpeningCrawls();
    const openingCrawlSetWitchCount = getOpeningCrawlSetWitchCount(allFilmsOpeningCrawlArray);

    await client.setEx(req.originalUrl, 60 * 60 * 24, JSON.stringify(openingCrawlSetWitchCount));

    res.json(openingCrawlSetWitchCount);
  } catch (e) {
    next(e);
  }
};

const getMostPopularPersonInDescriptions = async (req, res, next) => {
  try {
    const allPeople = await getPeople(1);
    const allPeopleName = allPeople.map((person) => person.name);
    const openingCrawl = await getOpeningCrawls();
    const popularityArr = [];

    allPeopleName.forEach((personName) => {
      const matches = occurrences(openingCrawl, personName);
      if (matches > 0) {
        popularityArr.push([personName, matches]);
      }
    });

    const maxCount = Math.max(...popularityArr.map((o) => o[1]));
    const mostPopularPersons = popularityArr.filter((person) => person[1] >= maxCount).map((person) => person[0]);

    await client.setEx(req.originalUrl, 60 * 60 * 24, JSON.stringify(mostPopularPersons));

    res.json(mostPopularPersons);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getUniqueWordsWitchCount,
  getMostPopularPersonInDescriptions,
  getOpeningCrawlSetWitchCount,
};
