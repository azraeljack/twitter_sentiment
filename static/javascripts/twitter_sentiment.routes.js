(function () {
    'use strict';

    angular
        .module('twitter_sentiment.routes')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/Result', {
                controller: 'ResultController',
                controllerAs: 'vm',
                templateURL: '/static/templates/layout/result.html'
            })
            .when('/History', {
                controller: 'HistoryController',
                controllerAs: 'vm',
                templateURL: '/static/templates/layout/history.html'
            })
            .otherwise('/');
    }
})();
