app.controller('LicencasController', function($scope, $http, $timeout, $q, $log, DadoEscolaOp) {

    $scope.escola = DadoEscolaOp.getEscolaSelect();
    
});