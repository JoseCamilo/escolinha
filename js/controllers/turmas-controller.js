app.controller('TurmasController', function($scope, $http, $timeout, $q, $log, DadoTurmaOp) {
   
    $scope.turmas = DadoTurmaOp.loadTurmas();
    
    $scope.verTurma = function(i) {
        DadoTurmaOp.setSelectTurma($scope.turmas[i].id);
    };
    
    $scope.select= function(i) {
      $scope.selectedIndex=i;
    };
        
        
});


app.controller('TurmaItController', function($scope, $http, $timeout, $q, $log, DadoTurmaOp, DadoAlunoOp) {
    $scope.turma = DadoTurmaOp.getSelectTurma();
    $scope.alunos = DadoAlunoOp.getAlunosTurma($scope.turma.titulo);
    $scope.altTurma = angular.copy($scope.turma);
    
    
    //Botao pesquisa
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
    //Botao pesquisa FIM
});

