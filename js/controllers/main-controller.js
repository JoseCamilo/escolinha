app.controller('MainController', function($scope, $window, $route, $routeParams) {
    
    $scope.activetab = $routeParams.aba;
    $scope.lPesq = false;
    $scope.searchText='';

    $scope.btnPesq = function(){
        $scope.lPesq = !$scope.lPesq;
        $scope.searchText='';

        if($scope.lPesq){
            $scope.focusById('inputPesq');
        }
    };

    $scope.focusById = function (id) {
        $scope.$broadcast(id);
    };
    
});