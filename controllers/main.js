angular.module('app')
.controller('AppCtrl', ['$scope', '$log', '$q', '$timeout', 'ApiService', AppCtrl]);

function AppCtrl($scope, $log, $q, $timeout, ApiService) {
    //var vm = this;
    $log.debug('debug in AppCtrl()');

    $scope.formSeries = '';
    $scope.targetSeries = '';
    $scope.formatSeries = RegExp('^[a-zA-Z0-9\-]{1,10}$');
    //$scope.selectedSeries = '';
    //$scope.searchSeries = '';
    //$scope.allSeriesList = [];
    //$scope.filteredSeriesList = [];
    $scope.disableUpdateButton = true;
    $scope.droppedFiles = [
      {type: "A", name: ''},
      {type: "B", name: ''},
    ];
  

    // フォームバリデーション
    $scope.onFormSeriesChange = function(text) {
      if (text) {
        // フォーマットを満たす
        if ($scope.formatSeries.test(text)) {
          $scope.targetSeries = text;
        }
        $log.debug('onFormSeriesChange(): text='+text+', targetSeries='+$scope.targetSeries);
      }
    };

    // 反映ボタン
    $scope.onUpdateButton = function() {
      $log.debug('onUpdateButton()');
    };

    // クリアボタン
    $scope.onClearButton = function() {
      $log.debug('onClearButton()');
    };

    // シリーズ名の入力
    $scope.$watch('formSeries', function(newText, oldText, scope) {
      $log.debug('$watch: formSeries = ' + oldText + ' -> ' + newText);
      // フォーマットを満たす
      if (newText && $scope.formatSeries.test(newText)) {
        scope.targetSeries = newText;
      } else {
        scope.targetSeries = '';
      }
    });

    // 反映ボタンの有効化
    // 1. 入力
    // 2. drag & drop    
    $scope.$watch('targetSeries', function(newText, oldText, scope) {
      $log.debug('$watch: targetSeries = ' + oldText + ' -> ' + newText);
      if (newText) {
        // 反映ボタンの有効化
        scope.disableUpdateButton = false;
        $log.debug('有効化');
      } else {
        scope.disableUpdateButton = true;
        $log.debug('無効化');
      }
    });

    // ファイルを取り込んだとき
    $scope.$watch('droppedFiles', function(newValue, oldValue, scope) {
      $log.debug('$watch: droppedFiles');
      var fileName = newValue[newValue.length-1].name.split('.')[0];
      scope.formSeries = fileName;
    });

    // ダウンロード実行
    //$scope.downloadSeries();
    
}