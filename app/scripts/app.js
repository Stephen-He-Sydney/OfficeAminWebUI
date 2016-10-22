'use strict';

/**
 * @ngdoc overview
 * @name officeAdminWebUiApp
 * @description
 * # officeAdminWebUiApp
 *
 * Main module of the application.
 */

var appMainModule = angular.module('officeAdminWebUiApp', ['ngResource', 'ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  });
