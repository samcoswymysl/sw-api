const express = require('express');

// Access controller
const loginController = require('./controllers/access/checkLoginDataController');
const accessUser = require('./controllers/access/accessUserController');

//  Register/login/logout/
const { registerRouter } = require('./routes/registerRouter');
const { loginRouter } = require('./routes/loginRouter');
const { logoutRouter } = require('./routes/loguotRouter');

const app = express.Router();

// Register Login Logout Confirm emil reset password
app.use('/register', registerRouter);
app.use('/login', loginController, loginRouter);
app.use('/logout', logoutRouter);




module.exports = {
  app,
};
