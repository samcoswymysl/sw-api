const express = require('express');

// Access controller
const loginController = require('./controllers/access/checkLoginDataController');
const accessUser = require('./controllers/access/accessUserController');

// cache
const { checkCache } = require('./middleware/catcheMiddleware');

//  Require register/login/logout router
const { registerRouter } = require('./routes/registerRouter');
const { loginRouter } = require('./routes/loginRouter');
const { logoutRouter } = require('./routes/loguotRouter');

// import router to contact witch api
const { filmsRouter } = require('./routes/filmsRouter');
const { speciesRouter } = require('./routes/speciesRouter');
const { vehiclesRouter } = require('./routes/vehiclesRouter');
const { starshipsRouter } = require('./routes/starshipsRouter');
const { planetsRouter } = require('./routes/planetsRouter');
const { openingCrawlsDataRouter } = require('./routes/openingCrawlsDataRouter');

const app = express.Router();

// Register Login Logout Confirm emil reset password
app.use('/register', registerRouter);
app.use('/login', loginController, loginRouter);
app.use('/logout', logoutRouter);

// Request to api
app.use('/films', accessUser, checkCache, filmsRouter);
app.use('/species', accessUser, checkCache, speciesRouter);
app.use('/vehicles', accessUser, checkCache, vehiclesRouter);
app.use('/starships', accessUser, checkCache, starshipsRouter);
app.use('/planets', accessUser, checkCache, planetsRouter);
app.use('/crawls', accessUser, checkCache, openingCrawlsDataRouter);

module.exports = {
  app,
};
