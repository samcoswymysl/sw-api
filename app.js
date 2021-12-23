const express = require('express');

// Access controller
const loginController = require('./controllers/access/checkLoginDataController');
const accessUser = require('./controllers/access/accessUserController');

//  Require register/login/logout router
const { registerRouter } = require('./routes/registerRouter');
const { loginRouter } = require('./routes/loginRouter');
const { logoutRouter } = require('./routes/loguotRouter');

// import router to contact witch api
const { filmsRouter } = require('./routes/filmsRouter');
const {speciesRouter} = require("./routes/speciesRouter");

const app = express.Router();

// Register Login Logout Confirm emil reset password
app.use('/register', registerRouter);
app.use('/login', loginController, loginRouter);
app.use('/logout', logoutRouter);

// Request to api
app.use('/films', filmsRouter);
app.use('/species', speciesRouter);

module.exports = {
  app,
};
