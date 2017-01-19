(function () {
    'use strict';

    angular
        .module('twitter_sentiment.config')
        .config(config);

    config.$inject = ['$locationProvider', '$mdThemingProvider'];

    function config($locationProvider, $mdThemingProvider) {
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
        $mdThemingProvider.theme('default')
            .dark();
    }
});
