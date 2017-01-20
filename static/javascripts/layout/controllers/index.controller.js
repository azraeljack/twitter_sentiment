/**
 * Controller control the view of the index page.
 * Includes the search bar and tabs, also the search function.
 */

(function () {
    'use strict';

    angular
        .module('twitter_sentiment.layout.controllers')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$window', 'Alertify', 'Search'];

    function IndexController($window, Alertify, Search) {

        var vm = this;

        vm.showSearch = false;
        vm.showResult = false;
        vm.loading = false;
        vm.keyword = '';
        vm.selectedIndex = 0;
        vm.tweets = [];
        vm.history = [];

        vm.search = search;
        vm.open = open;

        function open(url) {
            $window.open(url);
        }

        function search(item) {
            if(item !== undefined)
                vm.keyword = item;

            if (vm.keyword !== undefined && vm.keyword !== '') {
                vm.history.push(vm.keyword);
                vm.loading = true;
                vm.showResult = false;
                Search.search(vm.keyword).then(SearchSuccessFn, SearchErrorFn);
                vm.keyword = '';
            }
            else
                Alertify.error("Please type in the keywords you want to search!");
        }

        function SearchSuccessFn(data, status, headers, config) {
            vm.loading = false;
            vm.showResult = true;
            vm.showSearch = !vm.showSearch;
            vm.selectedIndex = 0;
            vm.tweets = data.data;
            Alertify.success('Search succeeded!');
        }

        function SearchErrorFn(data, status, headers, config) {
            vm.loading = false;
            Alertify.error("Search Failed!");
        }
    }
})();
