app.controller('EscolasController', function($scope, $http, $timeout, $q, $log, DadoEscolaOp) {

    $scope.escolas = DadoEscolaOp.loadEscolas();
    $scope.incEscola = DadoEscolaOp.newEscola();
    
    $scope.selectEscola = function(i){
      DadoEscolaOp.setEscolaSelect($scope.escolas[i].id);  
    };
    
});