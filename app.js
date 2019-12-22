angular.module('app', ['ngMaterial']) // 'ngMessages'
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('altTheme')
    .primaryPalette('green')
    .accentPalette('orange');
  })
.config(function($logProvider) {
  $logProvider.debugEnabled(true);
  });
