(function () {
    'use strict';

    angular
        .module('twitter_sentiment.routes')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'IndexController',
                controllerAs: 'vm',
                templateURL: '/static/templates/layout/index.html'
            })
            .otherwise('/');
    }
})();
