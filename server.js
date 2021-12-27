const dotenv = require('dotenv');

dotenv.config({ path: '.env' });
const express = require('express');
const cookieParser = require('cookie-parser');
const { sequelize } = require('./DB/models/index');

// require routes
const { app } = require('./app');

// Authorization require
const { passport } = require('./controllers/access/authorization');

// requires
const { handleError } = require('./middleware/handleError');
const { setHeader } = require('./middleware/setHeaderFromCookie');
const { checkCache } = require('./middleware/catcheMiddleware');

// different variable

const PORT = process.env.PORT || 5000;

const server = express();

// Middleware
server.use(passport.initialize());
server.use(cookieParser(process.env.COOKIE_SECRET));
server.use(express.json());
server.use(setHeader);

// Router to the rest routers
server.use('/', checkCache, app);

// handle Errors
server.use(handleError);

server.listen(PORT, 'localhost', async () => {
  console.log(`Server listen on http://localhost:${PORT}`);
  // connect with database
  await sequelize.authenticate();
  console.log('Connect with DB');
});

async function main() {
  await sequelize.sync({ force: true });
}

// Create/Reset Data base
// main();
