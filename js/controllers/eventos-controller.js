app.controller('EventosController', function($scope, $http, $timeout, $q, $log, DadoEventoOp) {
   
    $scope.eventos = DadoEventoOp.loadEventos();
    $scope.presencas = DadoEventoOp.loadPresencas();
            
});


app.controller('EventoItController', function($scope, $http, $timeout, $q, $log, DadoEventoOp, DadoAlunoOp, $route, $routeParams, $filter) {
    
    $scope.idEvento = $routeParams.id;
    
    $scope.evento = DadoEventoOp.getEvento($scope.idEvento);
    $scope.altEvento = angular.copy($scope.evento);
    
    $scope.presencas = DadoEventoOp.getPresencasEvento($scope.idEvento);
    $scope.alunos = DadoAlunoOp.getAlunos();
    $scope.alunosPresentes = [];
    $scope.alunosAusentes = [];
    
    $scope.lverPresentes = false;
    $scope.lverAusentes = true;
    
    $scope.arrecadado = 0;
    
    $scope.turmaSelect = {
            value: "",
            choices: ["", "turma 1", "turma 2", "turma 3"]
        };
    
    
    for(i=0; i<$scope.alunos.length; i++){
        var indexPre = $scope.presencas.indexOf($filter('filter')($scope.presencas,{alunoId: $scope.alunos[i].id},true)[0]);
        if(indexPre !== -1){
            $scope.alunosPresentes.push( $scope.alunos[i]);
            $scope.arrecadado++;
        }else{
            $scope.alunosAusentes.push($scope.alunos[i]);
        }
            
    }
    
        
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

