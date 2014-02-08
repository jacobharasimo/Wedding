'use strict';

angular.module('weddingApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]).run(function(){        
    })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
