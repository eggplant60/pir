angular.module('app')
.directive('ngDrop', function($parse, $log){
    return {
        restrict: 'A',
        //scope: {itemA: '='},
        link: function($scope, element, attrs){
            element.bind('drop', function(event){
                $log.debug('ngDrop');
                event.stopPropagation();
                event.preventDefault();  
                var file = event.dataTransfer.files[0];
                $log.debug(file);
                var reader = new FileReader();
                reader.onload = (function(theFile) {
                    return function(e) {
                        
                        var newFile = { name : theFile.name,
                                        type : theFile.type,
                                        //size : theFile.size,
                                        //lastModifiedDate : theFile.lastModifiedDate
                        };
                        $scope.droppedFiles.push(newFile);
                        //itemA.push(newFile);
                        $log.debug($scope.droppedFiles);
                    };
                })(file);
                reader.readAsDataURL(file); // データ読み取り
            });
        }
    };
})
.directive('ngDragover', function($parse, $log){
    return {
        restrict: 'A',
        link: function($scope, element, attrs){
            element.bind('dragover', function(event){
                $log.debug('ngDragover');
                event.stopPropagation();
                event.preventDefault();
                event.dataTransfer.dropEffect = 'copy';
            });
        }
    };
});