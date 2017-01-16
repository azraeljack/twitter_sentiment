(function () {
    'use strict';

    angular
        .module('twitter_sentiment.search_tweet.services')
        .factory('SearchTweet', SearchTweet);

    SearchTweet.$inject = ['$http', 'Alertify', 'Transfer'];

    function SearchTweet($http, Alertify, Transfer) {
        var SearchTweet = {
            search: search
        };

        return SearchTweet;

        function search(keywords) {
            return $http({
                method: 'GET',
                url: '/api/v1/search/',
                params: { keywords: keywords }
            }).then(SearchSuccessFn, SearchErrorFn);

            function SearchSuccessFn(data, status, headers, config) {
                Transfer.store(data.data);
                Alertify.success('Search succeeded!');
            }

            function SearchErrorFn(data, status, headers, config) {
                Alertify.error("Search Failed");
            }
        }
    }
})();
