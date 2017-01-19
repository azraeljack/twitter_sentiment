(function () {
    'use strict';

    angular
        .module('twitter_sentiment.search.services')
        .factory('Search', Search);

    Search.$inject = ['$http'];

    function Search($http) {
        var Search = {
            search: search
        };

        return Search;

        function search(keywords) {
            return $http({
                method: 'GET',
                url: '/api/v1/search/',
                params: {keywords: keywords}
            })
        }
    }
})();
