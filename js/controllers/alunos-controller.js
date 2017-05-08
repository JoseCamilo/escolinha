app.controller('AlunosController', function($scope, $http) {

    $scope.alunos = [];
    $scope.alunoSelect = {};
    

    function carregaAlunos(){

      $http.get('http://172.16.93.182:3000/alunos/')
      .success(function(retorno) {
        $scope.alunos = retorno; // não precisa fazer retorno.data
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
          
          $http.post('http://172.16.93.182:3000/alunos'
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

          $http.put('http://172.16.93.182:3000/alunos'
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

});


app.controller('DemoCtrl', function($scope, $http,$timeout, $q, $log){

      var self = this;

    self.simulateQuery = false;
    self.isDisabled    = false;

    // list of `state` value/display objects
    self.states        = loadAll();
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;

    self.newState = newState;

    function newState(state) {
      alert("Sorry! You'll need to create a Constitution for " + state + " first!");
    }

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? self.states.filter( createFilterFor(query) ) : self.states,
          deferred;
      if (self.simulateQuery) {
        deferred = $q.defer();
        $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
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
     * Build `states` list of key/value pairs
     */
    function loadAll() {
      var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';

      return allStates.split(/, +/g).map( function (state) {
        return {
          value: state.toLowerCase(),
          display: state
        };
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