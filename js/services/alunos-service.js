app.factory('DadoAlunoOp', function ($filter) {
    
    var apiAlunos = 'http://172.16.93.182:3000/api/alunos/';
    var dadosLoadAlunos = [];
    var DadoAlunoOp = {};
    
    
    DadoAlunoOp.getAlunos = function() {
       this.dadosLoadAlunos = [ {"turma":["turma 1","turma 2"],"nome":"jose","foto":"https://3.bp.blogspot.com/-CD4dAi_QXY4/UWbIcR9jV9I/AAAAAAAAFno/jPnziUtiSS0/s1600/cortes-de-cabelo-para-rosto-quadrado-2.jpg"},
                                {"turma":["turma 1","turma 2"],"nome":"fernando","foto":"http://www.descomplicando.com/img/fotos/fotos%20de%20pessoas%204.JPG"},
                                {"turma":["turma 1","turma 3"],"nome":"camilo","foto":"https://imgnzn-a.akamaized.net/2012/1/materias/17166216157.jpg?w=700&h=393&mode=crop"},
                                {"turma":["turma 1","turma 3"],"nome":"silva","foto":"https://s3.amazonaws.com/igd-wp-uploads/2014/02/facebook-pessoas.jpg"},
                                {"turma":["turma 1","turma 4"],"nome":"sauro","foto":"http://educ-acao.web757.kinghost.net/wp-content/uploads/2012/08/img_0944.jpg"}];
        return this.dadosLoadAlunos;
    };
    
    DadoAlunoOp.getAlunosTurma = function(loadturma) {
        return $filter('filter')(this.dadosLoadAlunos, { turma: loadturma });
    };
    
    return DadoAlunoOp;
});   
    
//  $http.get(apiAlunos)
//  .success(function(retorno) {
//    $scope.alunos = retorno; // não precisa fazer retorno.data
//  })
//  .error(function(erro) {
//    console.log('Erro em carregaAlunos: ' + erro);
//        $scope.alunos = [{"nome":"erro ao listar alunos"}];
//  });
    
    
//var StudentService = angular.module('StudentService', [])
//StudentService.factory('StudentDataOp', ['$http', function ($http) {
//
//    var urlBase = 'http://localhost:2307/Service1.svc';
//    var StudentDataOp = {};
//
//    StudentDataOp.getStudents = function () {
//        return $http.get(urlBase+'/GetStudents');
//    };
//
//    StudentDataOp.addStudent = function (stud) {
//        return $http.post(urlBase + '/AddStudent', stud);
//    };
//    return StudentDataOp;
//
//}]);
    
    
    
//var myApp = angular.module('myApp', ['StudentService']);
//
//myApp.controller('StudentController', function ($scope, StudentDataOp) {
//    $scope.status;
//    $scope.students;
//    getStudents();
//
//    function getStudents() {
//        StudentDataOp.getStudents()
//            .success(function (studs) {
//                $scope.students = studs;
//            })
//            .error(function (error) {
//                $scope.status = 'Unable to load customer data: ' + error.message;
//            });
//    }
//
//    $scope.addStudent = function () {
//
//        var stud = {
//            ID: 145,
//            FirstName: $scope.fname,
//            LastName: $scope.lname
//        };
//        StudentDataOp.addStudent(stud)
//            .success(function () {
//                $scope.status = 'Inserted Student! Refreshing Student list.';
//                $scope.students.push(stud);
//            }).
//            error(function (error) {
//                $scope.status = 'Unable to insert Student: ' + error.message;
//            });
//    };
//});


