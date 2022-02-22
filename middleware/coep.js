var coep = require('../lib/coep');

function createHeader(options) {
    const header = {};
    header[coep.getHeaderName()] = coep.getDirectiveOrDefault(options.directive);
    return header;
}

module.exports = function setCoepHeaders(req, res, next) {
    res.set(createHeader({}));
    next();
}

// TODO: add a test for this middleware
