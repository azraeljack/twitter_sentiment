(function () {
    'use strict';

    angular
        .module('twitter_sentiment.utils.services')
        .factory('Transfer', Transfer);

    function Transfer() {
        var Transfer = {
            store: store,
            get: get
        };

        var messages = {};
        messages.list = [];

        return Transfer;

        function store(data) {
            console.log('storing data');
            messages.list.push({
                id: messages.list.length,
                data: data
            });
            console.log(messages);
        }

        function get() {
            console.log(messages.list.length);
            if (messages.list.length > 0)
                return messages.list.pop();
            else
                return undefined;
        }
  }
})();
