'use strict';

/**
 * @ngdoc overview
 * @name ahPortfolioApp
 * @description
 * # ahPortfolioApp
 *
 * Main module of the application.
 */
angular
  .module('ahPortfolioApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      //$locationProvider.html5Mode(true);
      //$locationProvider.hashPrefix('!');
  });
