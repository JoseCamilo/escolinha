app.factory('DadoCobrancaOp', function ($filter) {
    
    var apiCobrancas = 'http://172.16.93.182:3000/api/alunos/';
    var dadosLoadCobrancas = [];
    var dadosLoadPagamentos = [];
    var dadosSelectCobranca = {};
    var DadoCobrancaOp = {};
    
    
    DadoCobrancaOp.loadCobrancas = function() {
       this.dadosLoadCobrancas = [  {"id":"1","titulo":"cobranca 1","descricao":"descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1descricao 1"},
                                    {"id":"2","titulo":"cobranca 2","descricao":"descricao 2"},
                                    {"id":"3","titulo":"cobranca 3","descricao":"descricao 3"},
                                    {"id":"4","titulo":"cobranca 4","descricao":"descricao 4"},
                                    {"id":"5","titulo":"cobranca 5","descricao":"descricao 5"}];
        
        return this.dadosLoadCobrancas;
    };
    
    DadoCobrancaOp.loadPagamentos = function() {
       this.dadosLoadPagamentos = [ {"id":"1","cobrancaId":"1","alunoId":"1","valor":"10"},
                                    {"id":"2","cobrancaId":"1","alunoId":"2","valor":"20"},
                                    {"id":"3","cobrancaId":"1","alunoId":"3","valor":"30"},
                                    {"id":"4","cobrancaId":"2","alunoId":"4","valor":"40"},
                                    {"id":"5","cobrancaId":"2","alunoId":"5","valor":"50"}];
        
        return this.dadosLoadPagamentos;
    };
    
     DadoCobrancaOp.getCobrancas = function() {
         return this.dadosLoadCobrancas;
     };
    
    DadoCobrancaOp.getPagamentos = function() {
         return this.dadosLoadPagamentos;
     };
    
    DadoCobrancaOp.setSelectCobranca = function(loadId) {
         this.dadosSelectCobranca = $filter('filter')(this.dadosSelectCobranca, { id: loadId }, true)[0];
        return this.dadosSelectCobranca;
     };
    
    DadoCobrancaOp.getSelectCobranca = function() {
        return this.dadosSelectCobranca;
     };
    
    DadoCobrancaOp.getCobranca = function(loadId) {
        return $filter('filter')(this.dadosLoadCobrancas, { id: loadId }, true)[0];;
     };
    
    DadoCobrancaOp.getPagamentosCobranca = function(loadId) {
        return $filter('filter')(this.dadosLoadPagamentos, { cobrancaId: loadId });
     };
    
    return DadoCobrancaOp;
});