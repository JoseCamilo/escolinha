app.factory('DadoEscolaOp', function ($filter) {
    
    var apiEscolas = 'http://172.16.93.182:3000/api/alunos/';
    var dadosLoadEscolas = [];
    var dadosEscolaSelect = {};
    var DadoEscolaOp = {};
    
    
    DadoEscolaOp.loadEscolas = function() {
       this.dadosLoadEscolas = [ {"token":"kgdsafgsbfynb64yn6gun46gm6t4m6t4f4u6485191dsf6168dsf16d8f16sad8f16ads8f1a6sd8f1a","dtcriacao":"23/10/2010","vigencia":"08/06/2017","mensalidade":"10","nomedb":"dbescola","id":"1","nome":"escolinha jose"},
                                 {"token":"kgdsafgsbfynb64yn6gun46gm6t4m6t4f4u6485191dsf6168dsf16d8f16sad8f16ads8f1a6sd8f1a","dtcriacao":"23/10/2010","vigencia":"08/06/2017","mensalidade":"10","nomedb":"dbescola","id":"2","nome":"escolinha fernando"},
                                 {"token":"kgdsafgsbfynb64yn6gun46gm6t4m6t4f4u6485191dsf6168dsf16d8f16sad8f16ads8f1a6sd8f1a","dtcriacao":"23/10/2010","vigencia":"08/06/2017","mensalidade":"10","nomedb":"dbescola","id":"3","nome":"escolinha camilo"},
                                 {"token":"kgdsafgsbfynb64yn6gun46gm6t4m6t4f4u6485191dsf6168dsf16d8f16sad8f16ads8f1a6sd8f1a","dtcriacao":"23/10/2010","vigencia":"08/06/2017","mensalidade":"10","nomedb":"dbescola","id":"4","nome":"escolinha silva"},
                                 {"token":"kgdsafgsbfynb64yn6gun46gm6t4m6t4f4u6485191dsf6168dsf16d8f16sad8f16ads8f1a6sd8f1a","dtcriacao":"23/10/2010","vigencia":"08/06/2017","mensalidade":"10","nomedb":"dbescola","id":"5","nome":"escolinha sauro"}];
        return this.dadosLoadEscolas;
    };
    
    DadoEscolaOp.newEscola = function(nome,token) {
        return {"nome":nome,
                "token":token};
    };    
    
    DadoEscolaOp.getEscolas = function() {
        return this.dadosLoadEscolas;
    };
    
    
    DadoEscolaOp.getEscola = function(loadid) {
        return $filter('filter')(this.dadosLoadEscolas, { id: loadid }, true)[0];
    };
    
    DadoEscolaOp.setEscolaSelect = function(loadid) {
        this.dadosEscolaSelect = $filter('filter')(this.dadosLoadEscolas, { id: loadid }, true)[0];
        return this.dadosEscolaSelect;
    };
    
    DadoEscolaOp.getEscolaSelect = function() {
        return this.dadosEscolaSelect;
    };
    
    
    
    return DadoEscolaOp;
});  