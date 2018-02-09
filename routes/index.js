var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    description: "sucks!!",
    smashmouth: "Somebody once told me the world was gonna roll me i aint the sharpest tool in the sheed. She was looking kinda dumb with her finger on her thumb and the shape of an L on her forehead.",
  });
});

module.exports = router;
