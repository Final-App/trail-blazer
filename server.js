// dependencies
const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const db = require('./models');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;
const environment = process.env.NODE_ENV || 'development';

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
 
// Serve up static assets (usually on heroku)
console.log(process.env.NODE_ENV);
if (environment === 'production') {
  app.use(express.static('client/build'));
  app.get("*", function (req, res) {
    res.sendFile(__dirname, "./client/build")
  })
}

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

// Start the API server
// ADD SEQUELIZE HERE TO CONNECT TO YOUR DB
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});