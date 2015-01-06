'use strict';

/**
 * @ngdoc directive
 * @name ahPortfolioApp.directive:cycle
 * @description
 * # cycle
 */
angular.module('ahPortfolioApp')
  .directive('cycle', function () {
    return {
        priority: 1001,
        restrict: 'AC',
        link: function(scope, element, attrs) {
            var config = angular.extend({
              slides: '.slide',
               fx: 'fade',
               timeout: 7000,
               autoHeight: 'calc',
               paused: false,
               pauseOnPagerHover: true,
               prev: '#prev',
               next: '#next',
               log: false

            },  scope.$eval(attrs.cycle));
            setTimeout(function () {
              element.cycle(config);
            },1000);

        }
    };
  });
