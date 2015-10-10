angular.module('ESPiN', [
  'ngRoute',
  'ngSanitize'
]).config(function ( $routeProvider ) {
    // TODO: add router config
}).run(function($rootScope){
  $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
    console.log(event, current, previous, rejection)
  })
});
