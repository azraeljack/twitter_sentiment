angular
    .module('twitter_sentiment', [
        'twitter_sentiment.config',
        'twitter_sentiment.search',
        'twitter_sentiment.layout',
        'twitter_sentiment.utils',
        // 'twitter_sentiment.routes',
        'ngMaterial',
        'ngMdIcons'
    ]);

angular
    .module('twitter_sentiment.config', ['ngMaterial', 'ngAnimate']);

// angular
//     .module('twitter_sentiment.routes', ['ngRoute']);

angular
    .module('twitter_sentiment')
    .run(run);

run.$inject = ['$http'];

function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
}
