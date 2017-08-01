(function() {
    'use strict';

    angular.module('app', [
        'app.core',
        'app.components',
        'app.home'
    ]);

    angular.element(function() {
        angular.bootstrap(document, ['app']);
    });
})();
