'use strict';

/**
 * @ngdoc service
 * @name ahPortfolioApp.Portfolio
 * @description
 * # Portfolio
 * Factory in the ahPortfolioApp.
 */
angular.module('ahPortfolioApp')
  .factory('Portfolio', function($resource){
    return $resource('data/portfolio.json', {}, {
      query: {method:'GET', params:{'cache': true}, isArray:true}
    });
  });
