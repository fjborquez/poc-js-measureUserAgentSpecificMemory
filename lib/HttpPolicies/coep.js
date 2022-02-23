(function() {

    'use strict';

    var settings = {
        defaultDirective: 'unsafe-none',
        headerName: 'Cross-Origin-Embedder-Policy',
        directives: ['require-corp']
    };

    settings.directives.unshift(settings.defaultDirective);

    function isDirectiveAllowed(directive) {
        return settings.directives.includes(directive);
    }

    function getDirectiveOrDefault(directive) {
        return isDirectiveAllowed(directive) ? directive : settings.defaultDirective;
    }

    function createObject() {
        return {
            isDirectiveAllowed: isDirectiveAllowed,
            getDirectiveOrDefault: getDirectiveOrDefault,
            getDefaultDirective: () => settings.defaultDirective,
            getHeaderName: () => settings.headerName,
        }
    }

    module.exports = createObject();
})();

// TODO: Add test for this library
// TODO: Make an interface and hierarchy for this library
