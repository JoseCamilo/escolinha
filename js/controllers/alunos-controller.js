app.controller('AlunosController', function($scope, $http, $timeout, $q, $log, DadoAlunoOp, DadoTurmaOp) {

    $scope.alunos = DadoAlunoOp.loadAlunos();
    $scope.turmas = DadoTurmaOp.loadTurmas();
    
});

app.controller('AlunoItController', function($scope, $http, $timeout, $q, $log, DadoAlunoOp,$routeParams, DadoTurmaOp) {
    
    $scope.idAluno = $routeParams.id;
    
    $scope.aluno = DadoAlunoOp.getAluno($scope.idAluno);
    $scope.tituloTurmas = DadoTurmaOp.getTituloTurmas();
        
    $scope.turmaSelect = {
            value: $scope.aluno.turma,
            choices: $scope.tituloTurmas
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
    
    
    //Campo Data de Nascimento
    var currentTime = new Date($scope.aluno.dtnasc.split("/")[2] , $scope.aluno.dtnasc.split("/")[1] - 1, $scope.aluno.dtnasc.split("/")[0]);
    $scope.currentTime = currentTime;
    $scope.month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    $scope.monthShort = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    $scope.weekdaysFull = ['Domingo', 'Segunda', 'terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
    $scope.weekdaysLetter = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    $scope.disable = [];
    $scope.today = 'Hoje';
    $scope.clear = 'Limpar';
    $scope.close = 'Fechar';
    var days = 29000;
    $scope.minDate = (new Date($scope.currentTime.getTime() - ( 1000 * 60 * 60 *24 * days ))).toISOString();
    $scope.maxDate = (new Date($scope.currentTime.getTime() + ( 1000 * 60 * 60 *24 * days ))).toISOString();
    $scope.onClose = function () {
        //console.log('onClose');
        $scope.aluno.dtnasc = $scope.currentTime;
    };
/*    $scope.onStart = function () {
        console.log('onStart');
    };
    $scope.onRender = function () {
        console.log('onRender');
    };
    $scope.onOpen = function () {
        console.log('onOpen');
    };
    $scope.onSet = function () {
        console.log('onSet');     
    };
    $scope.onStop = function () {
        console.log('onStop');

    };*/
    // FIM Campo Data de Nascimento
    
});
    
    
// ******************************
// AUTO COMPLETE md-complete
// ******************************
//var self = this;
//
//self.simulateQuery = false;
//
//
//// list of `state` value/display objects
//self.states        = loadAll();
//self.querySearch   = querySearch;
//self.selectedItemChange = selectedItemChange;
//self.searchTextChange   = searchTextChange;
//
//self.newState = newState;
//
//function newState(state) {
//  alert("Precisa criar esta função para incluir " + state + " !");
//}
//
///**
// * Search for states... use $timeout to simulate
// * remote dataservice call.
// */
//function querySearch (query) {
//  self.states = loadAll();
//  var results = query ? self.states.filter( createFilterFor(query) ) : self.states,
//      deferred;
//  if (self.simulateQuery) {
//    deferred = $q.defer();
//    $timeout(function () { deferred.resolve( results ); }, Math.random() * 5000, false);
//    return deferred.promise;
//  } else {
//    return results;
//  }
//}
//
//function searchTextChange(text) {
//  $log.info('Text changed to ' + text);
//}
//
//function selectedItemChange(item) {
//  $log.info('Item changed to ' + JSON.stringify(item));
//}
//
///**
// * lista os alunos
// */
//function loadAll() {
//  return $scope.alunos.map( function (state) {
//      state.value = state.nome.toLowerCase();
//    return state;
//  }); 
//}
//
///**
// * Create filter function for a query string
// */
//function createFilterFor(query) {
//  var lowercaseQuery = angular.lowercase(query);
//
//  return function filterFn(state) {
//    return (state.value.indexOf(lowercaseQuery) === 0);
//  };
//
//}

// TRECHO HTML

// <md-autocomplete
//     md-selected-item="ctrl.selectedItem"
//     md-search-text-change="ctrl.searchTextChange(ctrl.searchText)"
//     md-search-text="ctrl.searchText"
//     md-selected-item-change="ctrl.selectedItemChange(item)"
//     md-items="item in ctrl.querySearch(ctrl.searchText)"
//     md-item-text="item.nome"
//     md-min-length="0"
//     placeholder="Pesquisar aluno...">
//   <md-item-template>
//     <span md-highlight-text="ctrl.searchText" md-highlight-flags="^i">{{item.nome}}</span>
//   </md-item-template>
//   <md-not-found>
//     Nada encontrado com "{{ctrl.searchText}}".
//     <a ng-click="ctrl.newState(ctrl.searchText)">Incluir!</a>
//   </md-not-found>
// </md-autocomplete>
