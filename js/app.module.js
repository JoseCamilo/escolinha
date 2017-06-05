var app = angular.module('app', ['ngMaterial','ngRoute' , 'ui.materialize']);

app.directive('inputNumber', function(){
    return {
        require: 'ngModel',
        link: function(scope, elem, attrs, ngModel){
            if(attrs.type == 'number'){
                ngModel.$formatters.push(function(value){
                    return parseFloat(value);
                });
            }
        }
    };
});

app.directive('focusOn', function($timeout) {
   return function(scope, element, attrs) {
      scope.$on(attrs.focusOn, function(e) {
          $timeout(function() {
            element[0].focus(); 
          });
      });
   };
});

app.directive('focusOff', function($timeout) {
   return function(scope, element, attrs) {
      scope.$on(attrs.focusOff, function(e) {
          $timeout(function() {
            element[0].blur(); 
          });
      });
   };
});

app.filter('isIndexOf', function(){
    return function (arr, val, prop) {
      var l = arr.length,
        k = 0;
      for (k = 0; k < l; k = k + 1) {
        if (arr[k][prop] === val) {
          return true;
        }
      }
      return false;
    }
});


app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'views/abas.html',
                controller  : 'MainController'
            })
            .when('/abas/:aba', {
                templateUrl : 'views/abas.html',
                controller  : 'MainController',
            })
            // route for the aluno page
            .when('/aluno/', {
                templateUrl : 'views/aluno.html',
                controller  : 'AlunosController'
            })
            // route for the turma page
            .when('/turma/:id', {
                templateUrl : 'views/turma.html',
                controller  : 'TurmaItController'
            })
            // route for the turma page
            .when('/cobranca/:id', {
                templateUrl : 'views/cobranca.html',
                controller  : 'CobrancaItController'
            });
//            .otherwise({
//                redirectTo: '/'
//            });
    });

app.controller('alunoController', ["$scope", function ($scope) {
        $scope.showTabs = true;
    }]);