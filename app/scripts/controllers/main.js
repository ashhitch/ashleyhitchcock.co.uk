'use strict';

/**
 * @ngdoc function
 * @name ahPortfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ahPortfolioApp
 */
angular.module('ahPortfolioApp')
  .controller('MainCtrl', function ($scope, Portfolio, Instagram, INSTAGRAM_USER_ID) {


    var instagramSuccess = function(scope, res) {
          //console.log(res.data);
          if (res.meta.code !== 200) {
            scope.error = res.meta.error_type + ' | ' + res.meta.error_message;
            return;
          }
          if (res.data.length > 0) {
            scope.items = res.data;
            //console.log(scope.items);

          } else {
            scope.error = 'This hashtag has returned no results';
          }
        };

        $scope.portfolio = Portfolio.query();

        $scope.instagramData = {
          user: INSTAGRAM_USER_ID
        };


        Instagram.get(6, $scope.instagramData.user).success(function(response) {
          instagramSuccess($scope.instagramData, response);
        });



  });
