/**
 * Factory: SportsFactory
 */
angular.module('ESPiN')
  .factory('SportsFactory', function SportsFactory ($q) {
    'use strict';
    var exports = {};

    exports.interests = [];

    // get users sports interests on pinterest
    exports.getInterestsFromPinterest = function () {
      var deferred = $q.defer();
      PDK.me('/following/interests/', function(response) {
        if (!response || response.error) {
          console.log('Unable to get interest from Pinterest');
        } else {
          exports.interests = exports.interests.concat(response.data);
          deferred.resolve(response.data);
          //response.next();
          // after gettings all the users interests go to the callback
          if (response.hasNext) {
            
          } else {
            
          }
        }
      });
      return deferred.promise;
    };

    return exports;
  });
