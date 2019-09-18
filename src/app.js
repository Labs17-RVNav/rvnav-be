const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares');

const app = express();
//sentry.io
const Sentry = require('@sentry/node');
Sentry.init({
  dsn: 'https://3b0688b85a2b4a7b836501adec1ed46c@sentry.io/1538856'
});

const usersRouter = require('../users/users-router.js');
const vehicleRouter = require('../vehicles/vehicle-router.js');

// This request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors({ origin: "http://localhost:3000" || "https://www.rvnav.com"}));
app.use(express.json());

// SANITY CHECK ENDPOINT
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  });
});

// ROUTER ENDPOINTS
app.use('/users', usersRouter);
app.use('/vehicle', vehicleRouter);

//sentry.io
// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + '\n');
});

// CUSTOM 404 & ERROR HANDLER
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
