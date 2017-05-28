app.controller('CobrancasController', function($scope, $http, $timeout, $q, $log, DadoCobrancaOp) {
   
    $scope.cobrancas = DadoCobrancaOp.loadCobrancas();
    $scope.pagamentos = DadoCobrancaOp.loadPagamentos();
            
});


app.controller('CobrancaItController', function($scope, $http, $timeout, $q, $log, DadoCobrancaOp, DadoAlunoOp, $route, $routeParams) {
    
    $scope.idCobranca = $routeParams.id;
    
    $scope.cobranca = DadoCobrancaOp.getCobranca($scope.idCobranca);
    $scope.altCobranca = angular.copy($scope.cobranca);
    
    $scope.pagamentos = DadoCobrancaOp.getPagamentosCobranca($scope.idCobranca);
    $scope.alunos = [];
    
    
    for (i = 0; i < $scope.pagamentos.length; i++) { 
        $scope.alunos.push(DadoAlunoOp.getAluno($scope.pagamentos[i].alunoId));
    }
    
        
    
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

