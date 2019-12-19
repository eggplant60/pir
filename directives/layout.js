angular.module('app')
.directive('wgLayout', wgLayout);

function wgLayout() {
    return {
        restrict: 'E',
        templateUrl: 'directives/layout.html'
    };
}