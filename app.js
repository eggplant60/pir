angular.module('app', ['ngMaterial'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('altTheme')
    .primaryPalette('green')
    .accentPalette('orange');
  })
.config(function($logProvider) {
  $logProvider.debugEnabled(true);
  });
