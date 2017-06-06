app.factory('DadoLicencaOp', function ($filter) {
    
    var apiLicenca = 'http://172.16.93.182:3000/api/alunos/';
    var dadosLoadLicenca = {};
    var DadoLicencaOp = {};
    
    
    DadoLicencaOp.loadLicenca = function() {
       this.dadosLoadLicenca = {"id":"1","escola":"Leles escolinha"};
        return this.dadosLoadLicenca;
    };
    
    
    DadoLicencaOp.getLicenca = function() {
        return this.dadosLoadLicenca;
    };
    

    return DadoLicencaOp;
}); 