const setHttpPolicyHeader = require('../lib/Middleware/setHttpPolicyHeader');

module.exports = (req, res, next) => {
    let options = {
        policy: 'coep',
        directive: 'require-corp'
    };
    

    return setHttpPolicyHeader(options, req, res, next);
};

// TODO: add a test for this middleware
// TODO: recieve a policy and directive from the user
