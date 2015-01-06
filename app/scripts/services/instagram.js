'use strict';

/**
 * @ngdoc service
 * @name ahPortfolioApp.Instagram
 * @description
 * # Instagram
 * Factory in the ahPortfolioApp.
 */
angular.module('ahPortfolioApp')
  .factory('Instagram', function($http, INSTAGRAM_CLIENT_ID, INSTAGRAM_ACCESS_TOKEN) {
    var base = 'https://api.instagram.com/v1';
    return {
      'get': function(count, hashtag) {
        var request = '/users/' + hashtag + '/media/recent';
        var url = base + request;
        var config = {
          'params': {
            'cache': true,
            'client_id': INSTAGRAM_CLIENT_ID,
            'access_token': INSTAGRAM_ACCESS_TOKEN,
            'count': count,
            'callback': 'JSON_CALLBACK'
          }
        };
        return $http.jsonp(url, config);
      }
    };
  });
