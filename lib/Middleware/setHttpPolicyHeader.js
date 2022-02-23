const coep = require('../HttpPolicies/coep');
const coop = require('../HttpPolicies/coop');

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

    module.exports = (options, req, res, next) => {
        return {
            setPolicyHeader: setPolicyHeader(options, req, res, next)
        };
    };
})();
