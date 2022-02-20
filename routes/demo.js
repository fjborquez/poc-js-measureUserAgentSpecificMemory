var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('<html><body><button id="myButton">CLICK</button><script src="javascripts/demo.js"></script></body></html>');
});

module.exports = router;
