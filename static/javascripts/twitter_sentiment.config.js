(function () {
    'use strict';

    angular
        .module('twitter_sentiment.config')
        .config(config);

    config.$inject = ['$locationProvider', '$mdThemingProvider', '$interpolateProvider'];

    function config($locationProvider, $mdThemingProvider, $interpolateProvider) {
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
        $interpolateProvider
            .startSymbol('{$')
            .endSymbol('$}');
        $mdThemingProvider
            .theme('default')
            .primaryPalette('red')
            .accentPalette('teal')
            .backgroundPalette('grey')
            .dark();
    }
})();
