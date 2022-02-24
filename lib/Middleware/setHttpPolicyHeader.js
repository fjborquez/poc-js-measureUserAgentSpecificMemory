const coep = require('../HttpPolicies/policies/coep');
const coop = require('../HttpPolicies/policies/coop');

(function() {
    function setPolicyHeader(options, req, res, next) {
        const policy = choosePolicy(options);
        res.set(createHeader(options, policy));
        next();
    }

    function createHeader(options, policy) {
        const header = {};
        header[policy.getHeaderName()] = policy.getDirectiveOrDefault(options.directive);
        return header;
    }

    function choosePolicy(options) {
        switch (options.policy) {
            case 'coep':
                return coep;
            case 'coop':
                return coop;
            default:
                throw new Error('Invalid policy');
        }
    }

    module.exports = (options) => {
        return (req, res, next) => setPolicyHeader(options, req, res, next)
    };
})();

// TODO: add a test for this middleware
// TODO: choosePolicy to httpPolicyFactory in HttpPolicies library
