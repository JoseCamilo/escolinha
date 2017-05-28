app.factory('DadoTurmaOp', function ($filter) {
    
    var apiTurmas = 'http://172.16.93.182:3000/api/alunos/';
    var dadosLoadTurma = [];
    var DadoTurmaOp = {};
    
    
    DadoTurmaOp.loadTurmas = function() {
       this.dadosLoadTurma = [  {"id":"1","titulo":"turma 1","descricao":"descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1"},
                                {"id":"2","titulo":"turma 2","descricao":"descricao 2"},
                                {"id":"3","titulo":"turma 3","descricao":"descricao 3"},
                                {"id":"4","titulo":"turma 4","descricao":"descricao 4"},
                                {"id":"5","titulo":"turma 5","descricao":"descricao 5"}];
        
        return this.dadosLoadTurma;
    };
    
     DadoTurmaOp.getTurmas = function() {
         return this.dadosLoadTurma;
     };
        
    DadoTurmaOp.getTurma = function(loadId) {
        return $filter('filter')(this.dadosLoadTurma, { id: loadId }, true)[0];
     };
    
    return DadoTurmaOp;
});