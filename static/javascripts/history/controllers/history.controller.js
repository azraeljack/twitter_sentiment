(function () {
    'use strict';

    angular
        .module('twitter_sentiment.search_tweet.controllers')
        .controller('SearchTweetController', SearchTweetController);

    SearchTweetController.$inject = ['$scope', 'SearchTweet'];

    function SearchTweetController($scope, SearchTweet) {
        var vm = this;

        vm.search = search;

        vm.keywords = '';
        vm.tweets = [];

        function search() {
            SearchTweet.search(vm.keywords);
        }

    }
})();
