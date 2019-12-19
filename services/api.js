angular.module('app')
    .service('ApiService', ['$log', '$q', '$timeout', ApiService]);

function ApiService($log, $q, $timeout) {
    //var vm = this;
    
    var dummy = [
      'AAAAAAAAA1',
      'AAAAAAAAA2',
      'AAAAAAAAA3',
      'BBBBBBBBB1',
      'BBBBBBBBB2',
    ];

    function querySeries() {
        $log.debug('querySeries()');
        var defer = $q.defer();
        $timeout(function () {
            defer.resolve(dummy);
        }, 0);
        return defer.promise;
        //return dummy;
    }
    return {
      'querySeries': querySeries
    };

}
