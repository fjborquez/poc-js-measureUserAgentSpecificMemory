module.exports = function setCoepHeaders(req, res, next) {
    res.set({
        'Cross-Origin-Embedder-Policy': 'require-corp',
    });
    next();
}

// TODO: add a test for this middleware
// TODO: allow to change the value of the header
