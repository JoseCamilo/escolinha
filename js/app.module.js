var app = angular.module('app', ['ngRoute' , 'ui.materialize']);

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


app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'views/abas.html',
                controller  : 'MainController'
            })
            // route for the home page
            .when('/aluno', {
                templateUrl : 'views/aluno.html',
                controller  : 'AlunosController'
            });
    });

app.controller('alunoController', ["$scope", function ($scope) {
        $scope.showTabs = true;
    }]);