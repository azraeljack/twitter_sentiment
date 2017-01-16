angular
    .module('twitter_sentiment', [
        'twitter_sentiment.config',
        'twitter_sentiment.routes',
        'twitter_sentiment.search_tweet',
        'twitter_sentiment.show_tweet',
        'twitter_sentiment.layout',
        'twitter_sentiment.utils'
    ]);

angular
    .module('twitter_sentiment.config', []);

angular
    .module('twitter_sentiment.routes', ['ngRoute']);

angular
    .module('twitter_sentiment')
    .run(run);

run.$inject = ['$http'];

function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
}
