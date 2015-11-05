'use strict';

/**
 * @ngdoc overview
 * @name 2015blueironhackWeiqingApp
 * @description
 * # 2015blueironhackWeiqingApp
 *
 * Main module of the application.
 */
angular
  .module('2015blueironhackWeiqingApp', [
    'ngRoute','d3'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
