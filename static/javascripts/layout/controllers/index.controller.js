/**
 * Controller control the view of the index page.
 * Includes the search bar and tabs, also the search function.
 */

(function () {
    'use strict';

    angular
        .module('twitter_sentiment.layout.controllers')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$scope', 'Alertify', 'Search'];

    function IndexController($scope, Alertify, Search) {

        var vm = this;

        vm.showSearch = false;
        vm.keyword = '';
        vm.selectedIndex = 0;
        vm.tweets = [];
        vm.history = [];

        vm.search = search;

        function search() {
            if (vm.keyword !== undefined && vm.keyword !== '') {
                vm.history.push(vm.keyword);
                Search.search(vm.keyword).then(SearchSuccessFn, SearchErrorFn);
            }
            else
                Alertify.error("Please type in the keywords you want to search!");
        }

        function SearchSuccessFn(data, status, headers, config) {
            vm.showSearch = !vm.showSearch;
            console.log(data.data);
            vm.tweets = data.data;
            Alertify.success('Search succeeded!');
        }

        function SearchErrorFn(data, status, headers, config) {
            Alertify.error("Search Failed!");
        }
    }
})();
