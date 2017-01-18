/**
 * Controller control the view of the index page.
 * Includes the search bar and tabs, also the search function.
 */

(function () {
    'use strict';

    angular
        .module('twitter_sentiment.layout.controllers')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$scope'];

    function IndexController($scope) {
        var vm = this;



    }
})();
