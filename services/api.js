(function () {
  'use strict';

  angular.module('app')
      .service('ApiService', ['$log', '$q', '$timeout', ApiService]);

  function ApiService($log, $q, $timeout) {
      //var vm = this;
      
      /*var dummy = [
        'AAAAAAAAA1',
        'AAAAAAAAA2',
        'AAAAAAAAA3',
        'BBBBBBBBB1',
        'BBBBBBBBB2',
      ];*/

      function loadAll() {
        var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
                Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
                Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
                Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
                North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
                South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
                Wisconsin, Wyoming';
        return allStates.split(/, +/g).map(function (state) {
          return {
            value: state.toLowerCase(),
            display: state
          };
        });
      }

      function createFilterFor(query) {
        var lowercaseQuery = query.toLowerCase();
        return function filterFn(state) {
          return (state.value.indexOf(lowercaseQuery) === 0);
        };
      }
      
      function searchTextChange(text) {
        $log.info('Text changed to ' + text);
      }

      function selectedItemChange(item) {
        $log.info('Item changed to ' + JSON.stringify(item));
      }

      function querySearch (query) {
        var results = query ? self.states.filter(createFilterFor(query)) : self.states,
            deferred;
        if (self.simulateQuery) {
          deferred = $q.defer();
          $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
          return deferred.promise;
        } else {
          return results;
        }
      }

      function querySeries() {
        $log.debug('querySeries()');
        var defer = $q.defer();
        $timeout(function () {
            defer.resolve(dummy);
        }, 0);
        return defer.promise.then(function(r){
          $log.debug(r);
          return r;
        });
      }

      return {
        'querySeries': querySeries
      };

  }
})();
