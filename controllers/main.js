//angular.module('app.controllers.main', [])
angular.module('app')
.controller('AppCtrl', ['$log', 'ApiService', AppCtrl]);

function AppCtrl($log, ApiService) {
    var vm = this;
    $log.debug('debug in AppCtrl()');

    vm.formSeries = '';
    vm.allSeriesList = [];
    vm.filteredSeriesList = [];
    vm.formatSeries = '/^[a-zA-Z]{10}$/';
    vm.enableUpdateButton = false;
  

    // リスト取得
    vm.downloadSeries = function() {
      var promise = ApiService.querySeries();
      promise.then(function(r){
        vm.allSeriesList = r;
        $log.debug(vm.allSeriesList);
      });
    };

    // 削除
    vm.onDel = function(index) {
        $log.debug('on Del!');
        vm.messages.splice(index, 1);
    };

    // 追加
    vm.onAdd = function() {
      $log.debug('on Add!');
      var newMessage = vm.messageText;
      if (newMessage) {
        vm.messages.push(ApiService.new(newMessage));
      }
    };

    // フォームバリデーション
    vm.onFormSeriesChange = function() {
      $log.debug('onFormSeriesChange(): ' + vm.formSeries);
    };

    // ダウンロード実行
    vm.downloadSeries();
    
}