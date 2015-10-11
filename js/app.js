angular.module('ESPiN', [
  'ngRoute',
  'ngSanitize'
]).config(function ( $routeProvider ) {
      
  'use strict';

  $routeProvider
    .when('/sports', {
      templateUrl: 'views/sports.html',
      controller: 'SportsCtrl',
      controllerAs: 'sports'
    })
    .otherwise({
      redirectTo: '/sports'
    });

}).run(function($rootScope){
  $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
    console.log(event, current, previous, rejection)
  })
});
