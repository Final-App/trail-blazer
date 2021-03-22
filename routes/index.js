const path = require('path');
const router = require('express').Router();
const axios = require('axios')
const db = require('../models')
const passport = require('../config/passport');
const isAuthenticated = require('../config/middleware/isAuthenticated');
// router.use(“api”)
// Back end brewery search api call. a
// router.get(“/api/brewerysearch/:city”, function(req, res) {
//   axios.get(“https://api.openbrewerydb.org/breweries?by_city=”+req.params.city).then(function(results){
//       res.json(results.data.items)
//   })
// })
//Route to put brewery to crawl.

router.get('/api/user/getUser', isAuthenticated, function (req, res) {
  db.User.findOne({
    where: {
      id: req.user.id
    }
  }).then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post('/api/user/brewery', isAuthenticated, function (req, res) {
  console.log(req.body)
  db.Brewery.create({
    Name: req.body.name,
    Street: req.body.street,
    Postal_Code: req.body.postal_code,
    Latitude: req.body.latitude,
    Longitude: req.body.longitude,
    Brewery_type: req.body.brewry_type,
    UserId: req.user.id
  }).then(function (results) {
    res.json(results)
  })
})
router.get('/api/user/brewery', isAuthenticated, function (req, res) {
  db.Brewery.findAll({
    where: {
      UserId: req.user.id
    }
  }).then(function (data) {
    console.log(data)
    res.json(data)
  })
})
router.delete('/api/user/brewery/:id', isAuthenticated, function (req, res) {
  db.Brewery.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (data) {
    console.log(data)
    res.json(data)
  })
})

  router.post('/login', passport.authenticate('local'), (req, res) => {
    console.log(req);
    res.json(req.user);
  });

  router.post('/signup', (req, res) => {
    db.User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      date_of_birth: req.body.date_of_birth,
      password: req.body.password,
    })
      .then((dbResponse) => {
        res.json(dbResponse);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.get('/logout', (req, res) => {
    req.logout();
    res.json('logout successful');
  });

  router.get('/user_data', (req, res) => {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id,
      });
    }
  });
  router.get('/secrets', isAuthenticated, (req, res) => {
    res.json('if you see this, the user is authenticated via a check in /config/middleware/isAuthenticated');
  });





  module.exports = router
