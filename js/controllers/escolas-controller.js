app.controller('EscolasController', function($scope, $http, $timeout, $q, $log, DadoEscolaOp) {

    $scope.escolas = DadoEscolaOp.loadEscolas();
    $scope.incEscola = DadoEscolaOp.newEscola();
    
});