'use strict';

/**
 * @ngdoc directive
 * @name )nePageScroll.directive:onePageScroll
 * @description
 * # onePageScroll Directive
 */
angular.module('ahPortfolioApp')
  .directive('onePageScroll', function () {
    return {
      restrict: 'EA',

      scope: {
        sectionContainer: '=',
        pagination: '=',
        updateURL: '=',
        beforeMove: '=',
        afterMove: '=',
        loop: '=',
        responsiveFallback: '=',
        displayInput: '=',
        direction: '='
      },

      link: function postLink(scope, element) {

        scope.settings = function() {
              return {
                'sectionContainer': scope.sectionContainer || 'section',
                'easing': scope.pagination || 'ease',
                'pagination': scope.pagination || true,
                'updateURL': scope.updateURL || 1000,
                'beforeMove': scope.beforeMove || true,
                'afterMove': scope.afterMove || function() {},
                'loop': scope.loop || function() {},
                'keyboard': scope.keyboard || true,
                'responsiveFallback': scope.responsiveFallback || false,
                'direction': scope.direction || 'vertical'
              };
            };

          element.onepage_scroll(scope.settings());

      }
    };
  });


