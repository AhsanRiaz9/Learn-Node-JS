var express = require('express');
var router = express.Router();

// Test page route.
router.get('/test', function (req, res) {
  res.send('Test Page');
})


module.exports = router;
