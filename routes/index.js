const path = require('path');
const router = require('express').Router();
const axios = require("axios")


// router.use("api")

// Back end brewery search api call. a
// router.get("/api/brewerysearch/:city", function(req, res) {
//   axios.get("https://api.openbrewerydb.org/breweries?by_city="+req.params.city).then(function(results){
//       res.json(results.data.items)
//   })
// })


// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });



module.exports = router