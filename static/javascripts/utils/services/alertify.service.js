(function () {
    'use strict';

    angular
        .module('twitter_sentiment.utils.services')
        .factory('Alertify', Alertify);

    function Alertify() {
        var Alertify = {
            log: log,
            error: error,
            success: success
        };

        return Alertify;

        function log(content) {
            alertify.log('Info: ' + content);
        }

        function error(content) {
            alertify.error('Error: ' + content);
        }

        function success(content) {
            alertify.success('Success: ' + content);
        }
  }
})();
