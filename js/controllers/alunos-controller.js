app.controller('AlunosController', function($scope, $http, $timeout, $q, $log) {

    var apiAlunos = 'http://172.16.93.182:3000/api/alunos/';
    $scope.alunos = [];
    $scope.alunoSelect = {};
    

    function carregaAlunos(){

        console.log("carrega alunos");
      $http.get(apiAlunos)
      .success(function(retorno) {
        $scope.alunos = retorno; // não precisa fazer retorno.data
          console.log("carrega alunos dados");
      })
      .error(function(erro) {
        console.log('Erro em carregaAlunos: ' + erro);
            $scope.alunos = [{"nome":"erro ao listar alunos"}];
      });

    };
    
    carregaAlunos(); 
    
    $scope.select= function(i) {
      $scope.selectedIndex=i;
    };
    
    $scope.modalAluno = function(i) {
       
        $scope.alunoSelect = {"_id":$scope.alunos[i]._id,
                              "nome":$scope.alunos[i].nome,
                              "dtnasc":$scope.alunos[i].dtnasc,
                              "celular":$scope.alunos[i].celular,
                              "endereco":$scope.alunos[i].endereco,
                              "turma":$scope.alunos[i].turma}; 
        
                     
        $('#fabalunos').openModal();
    };
    
    $scope.fabAluno = function() {

        $scope.alunoSelect = {};             
        $('#fabalunos').openModal();
    };


    $scope.salvarAluno = function(){

      //inclusão
      if("undefined" != typeof $scope.alunoSelect.nome && "undefined" === typeof $scope.alunoSelect._id){
          
          $http.post(apiAlunos
            +'?nome='+ ("undefined" != typeof $scope.alunoSelect.nome ? $scope.alunoSelect.nome : '')
            +'&dtnasc='+  ("undefined" != typeof $scope.alunoSelect.dtnasc ? $scope.alunoSelect.dtnasc : '')
            +'&celular='+ ("undefined" != typeof $scope.alunoSelect.celular ? $scope.alunoSelect.celular : '')
            +'&endereco='+ ("undefined" != typeof $scope.alunoSelect.endereco ? $scope.alunoSelect.endereco : '') 
            +'&turma='+ ("undefined" != typeof $scope.alunoSelect.turma ? $scope.alunoSelect.turma : '') )
          .success(function(retorno) {
            Materialize.toast(retorno.nome + ' incluido com sucesso!', 4000);
            carregaAlunos();
          })
          .error(function(erro) {
            console.log('Erro incluir em salvarAluno: ' + erro);
            Materialize.toast('Problema ao alterar', 4000);
          });


      //Alteração
      }else if("undefined" != typeof $scope.alunoSelect._id){

          $http.put(apiAlunos
                      +'?id='+$scope.alunoSelect._id
                      +'&nome='+$scope.alunoSelect.nome
                      +'&dtnasc='+$scope.alunoSelect.dtnasc
                      +'&celular='+$scope.alunoSelect.celular
                      +'&endereco='+$scope.alunoSelect.endereco
                      +'&turma='+$scope.alunoSelect.turma)
          .success(function(retorno) {
            Materialize.toast(retorno.nome + ' alterado com sucesso!', 4000);
            carregaAlunos();
          })
          .error(function(erro) {
            console.log('Erro alterar em salvarAluno: ' + erro);
            Materialize.toast('Problema ao alterar', 4000);
          });
      }

    }
    
    
// ******************************
// AUTO COMPLETE md-complete
// ******************************
var self = this;

self.simulateQuery = false;


// list of `state` value/display objects
self.states        = loadAll();
self.querySearch   = querySearch;
self.selectedItemChange = selectedItemChange;
self.searchTextChange   = searchTextChange;

self.newState = newState;

function newState(state) {
  alert("Precisa criar esta função para incluir " + state + " !");
}

/**
 * Search for states... use $timeout to simulate
 * remote dataservice call.
 */
function querySearch (query) {
  self.states        = loadAll();
  var results = query ? self.states.filter( createFilterFor(query) ) : self.states,
      deferred;
  if (self.simulateQuery) {
    deferred = $q.defer();
    $timeout(function () { deferred.resolve( results ); }, Math.random() * 5000, false);
    return deferred.promise;
  } else {
    return results;
  }
}

function searchTextChange(text) {
  $log.info('Text changed to ' + text);
}

function selectedItemChange(item) {
  $log.info('Item changed to ' + JSON.stringify(item));
}

/**
 * lista os alunos
 */
function loadAll() {
      console.log("loadall");

  return $scope.alunos.map( function (state) {
      state.value = state.nome.toLowerCase();
    return state;
  }); 
}

/**
 * Create filter function for a query string
 */
function createFilterFor(query) {
  var lowercaseQuery = angular.lowercase(query);

  return function filterFn(state) {
    return (state.value.indexOf(lowercaseQuery) === 0);
  };

}

});
