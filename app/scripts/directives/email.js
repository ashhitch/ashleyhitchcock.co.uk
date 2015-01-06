'use strict';

/**
 * @ngdoc directive
 * @name ahPortfolioApp.directive:email
 * @description
 * # email
 */
angular.module('ahPortfolioApp')
  .directive('email', function () {
    return {
        restrict: 'A',
        link: function(scope, element) {

          var $email = element,
            emailA = 'hello',
            emailB = 'ashleyhitchcock.co.uk',
            emailString = emailA + '@' +emailB,
            emailHTML = 'Say <a href="mailto:'+ emailString +'"" class="h2 ani-text">'+emailA+'<span class="hidden-xs">@'+emailB+'</span></a>';

            $email.html(emailHTML);
        }
    };
  });
