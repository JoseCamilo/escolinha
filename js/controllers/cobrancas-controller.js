app.controller('CobrancasController', function($scope, $http, $timeout, $q, $log, DadoCobrancaOp) {
   
    $scope.cobrancas = DadoCobrancaOp.loadCobrancas();
    $scope.pagamentos = DadoCobrancaOp.loadPagamentos();
            
});


app.controller('CobrancaItController', function($scope, $http, $timeout, $q, $log, DadoCobrancaOp, DadoAlunoOp, $route, $routeParams, $filter) {
    
    $scope.idCobranca = $routeParams.id;
    
    $scope.cobranca = DadoCobrancaOp.getCobranca($scope.idCobranca);
    $scope.altCobranca = angular.copy($scope.cobranca);
    
    $scope.pagamentos = DadoCobrancaOp.getPagamentosCobranca($scope.idCobranca);
    $scope.alunos = DadoAlunoOp.getAlunos();
    $scope.alunosAdimp = [];
    $scope.alunosInadimp = [];
    
    $scope.lverAdimplentes = false;
    $scope.lverInadimplentes = true;
    
    $scope.arrecadado = 0;
    $scope.valorPago = "";
    
    
//    for (i = 0; i < $scope.pagamentos.length; i++) { 
//        $scope.alunos.push(DadoAlunoOp.getAluno($scope.pagamentos[i].alunoId));
//    }
    console.log($scope.pagamentos);
    
    for(i=0; i<$scope.alunos.length; i++){
        var indexPag = $scope.pagamentos.indexOf($filter('filter')($scope.pagamentos,{alunoId: $scope.alunos[i].id},true)[0]);
        if(indexPag !== -1){
            $scope.alunosAdimp.push( DadoCobrancaOp.newPagAluno($scope.alunos[i].id, $scope.alunos[i].turma, $scope.alunos[i].nome , $scope.alunos[i].foto,  $scope.pagamentos[indexPag].valor));
            $scope.arrecadado = $scope.arrecadado + parseInt($scope.pagamentos[indexPag].valor);
        }else{
            $scope.alunosInadimp.push($scope.alunos[i]);
        }
            
    }
    
        
    $scope.select= function(i) {
      $scope.selectedIndex=i;
    };
    
    $scope.viewvalor = function(){
      console.log($scope.valorPago);  
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

