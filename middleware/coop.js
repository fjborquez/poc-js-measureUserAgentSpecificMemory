module.exports = function setCoopHeaders(req, res, next) {
    res.set({
        'Cross-Origin-Opener-Policy': 'same-origin',
    });
    next();
}

// TODO: add a test for this middleware
// TODO: allow to change the value of the header
