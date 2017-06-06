app.factory('DadoEventoOp', function ($filter) {
    
    var apiEventos = 'http://172.16.93.182:3000/api/alunos/';
    var dadosLoadEventos = [];
    var dadosLoadPresencas = [];
    var DadoEventoOp = {};
    
    
    DadoEventoOp.loadEventos = function() {
       this.dadosLoadEventos = [    {"id":"1","titulo":"evento 1","descricao":"descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1"},
                                    {"id":"2","titulo":"evento 2","descricao":"descricao 2"},
                                    {"id":"3","titulo":"evento 3","descricao":"descricao 3"},
                                    {"id":"4","titulo":"evento 4","descricao":"descricao 4"},
                                    {"id":"5","titulo":"evento 5","descricao":"descricao 5"}];
        
        return this.dadosLoadEventos;
    };
    
    DadoEventoOp.loadPresencas = function() {
       this.dadosLoadPresencas = [  {"id":"1","eventoId":"1","alunoId":"1"},
                                    {"id":"2","eventoId":"3","alunoId":"2"},
                                    {"id":"3","eventoId":"3","alunoId":"3"},
                                    {"id":"4","eventoId":"2","alunoId":"4"},
                                    {"id":"5","eventoId":"2","alunoId":"5"}];
        
        return this.dadosLoadPresencas;
    };
    
        
    DadoEventoOp.getEventos = function() {
         return this.dadosLoadEventos;
     };
    
    DadoEventoOp.getPresencas = function() {
         return this.dadosLoadPresencas;
     };
    

    DadoEventoOp.getEvento = function(loadId) {
        return $filter('filter')(this.dadosLoadEventos, { id: loadId }, true)[0];;
     };
    
    DadoEventoOp.getPresencasEvento = function(loadId) {
        return $filter('filter')(this.dadosLoadPresencas, { eventoId: loadId });
     };
    
    return DadoEventoOp;
});