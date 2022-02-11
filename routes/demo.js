var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.set({
        'Cross-Origin-Embedder-Policy': 'require-corp',
        'Cross-Origin-Opener-Policy': 'same-origin',
    });

    res.send('<html><body><button id="myButton">CLICK</button><script src="javascripts/demo.js"></script></body></html>');
});

module.exports = router;
