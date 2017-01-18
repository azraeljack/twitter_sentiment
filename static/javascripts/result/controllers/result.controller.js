(function () {
    'use strict';

    angular
        .module('twitter_sentiment.show_tweet.controllers')
        .controller('ShowTweetController', ShowTweetController);

    ShowTweetController.$inject = ['$scope', 'Transfer'];

    function ShowTweetController($scope, Transfer) {
        var vm = this;

        vm.show = show;

        vm.keywords = '';
        vm.tweets = [];

        function show() {
            var data = Transfer.get();
            if(data !== undefined)
                vm.tweets = data.data;
        }

    }
})();
