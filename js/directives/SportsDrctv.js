/**
 * Directive: Inbox <inbox></inbox>
 */
angular.module('ESPiN')
  .directive('sports', function SportsDrctv() {
    'use strict';

    return {
      restrict: 'EA',
      replace: true,
      scope: true,
      templateUrl: "js/directives/sports.tmpl.html",
      controllerAs: 'sports',

      controller: function (SportsFactory) {
        this.sports = [];
        
        SportsFactory.getInterestsFromPinterest(angular.bind(this, function then() {
          this.sports = SportsFactory.interests;
        }));

      },

      link: function (scope, element, attrs, ctrl) {
        /* 
          by convention we do not $ prefix arguments to the link function
          this is to be explicit that they have a fixed order
        */
      }
    }
  });