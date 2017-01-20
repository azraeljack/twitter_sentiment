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
        vm.keyPressed = keyPressed;

        function open(url) {
            $window.open(url);
        }

        function keyPressed(keyEvent) {
            if (keyEvent.keyCode == 13) {
                vm.search();
            }
        }

        function search(keyword) {
            if (keyword !== undefined)
                vm.keyword = keyword;

            if (vm.keyword !== undefined && vm.keyword !== '') {
                if (!checkHistory(vm.keyword))
                    vm.history.push(vm.keyword);
                vm.selectedIndex = 0;
                vm.loading = true;
                vm.showResult = false;
                Search.search(vm.keyword).then(SearchSuccessFn, SearchErrorFn);
                vm.keyword = '';
            }
            else
                Alertify.error("Please type in the keywords you want to search!");
        }

        function checkHistory(history) {
            for (var i = 0; i < vm.history.length; i++) {
                if (vm.history[i] === history)
                    return true;
            }
            return false;
        }

        function SearchSuccessFn(data, status, headers, config) {
            vm.loading = false;
            vm.showResult = true;
            vm.showSearch = false;
            vm.tweets = data.data;
            Alertify.success('Search succeeded!');
        }

        function SearchErrorFn(data, status, headers, config) {
            vm.loading = false;
            Alertify.error("Search Failed!");
        }
    }
})();
