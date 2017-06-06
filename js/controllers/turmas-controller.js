app.controller('TurmasController', function($scope, $http, $timeout, $q, $log, DadoTurmaOp) {
   
    $scope.turmas = DadoTurmaOp.loadTurmas();
    
    
});


app.controller('TurmaItController', function($scope, $http, $timeout, $q, $log, DadoTurmaOp, DadoAlunoOp, $routeParams) {
    
    $scope.idTurma = $routeParams.id;
    
    $scope.turma = DadoTurmaOp.getTurma($scope.idTurma);
    $scope.alunos = DadoAlunoOp.getAlunosTurma($scope.turma.titulo);
    $scope.altTurma = angular.copy($scope.turma);
    
    
    $scope.select= function(i) {
      $scope.selectedIndex=i;
    };
    
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

