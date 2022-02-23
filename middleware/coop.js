const setHttpPolicyHeader = require('../lib/Middleware/setHttpPolicyHeader');

module.exports = (req, res, next) => {
    let options = {
        policy: 'coop',
        directive: 'same-origin'
    };

    return setHttpPolicyHeader(options, req, res, next);
};

// TODO: add a test for this middleware
// TODO: delete this file
