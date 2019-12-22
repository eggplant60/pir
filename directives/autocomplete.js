angular.module('app')
.directive('autoComplete', ['$log', 'autoCompleteDataService', 
                            function($log, autoCompleteDataService) {
    return {
        restrict: 'A',
        link: function(scope, elem, attr, ctrl) {
            $log.debug('autoComplete()', autoCompleteDataService.getSource());
            $log.debug('autoComplete()', elem);
            elem.autocomplete({
                source: autoCompleteDataService.getSource(),
                dely: 500,
                minLength: 1
            });

        }
    };
}])
.factory('autoCompleteDataService', [function() {
    return {
        getSource: function() {
            //this is where you'd set up your source... could be an external source, I suppose. 'something.php'
            return ['apples', 'oranges', 'bananas'];
        }
    };
}]);
