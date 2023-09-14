const produto = {
    nome: 'iPad',
    preco: '5600',
    desconto: 0.15,
    precoComDesconto: function() {
        return this.preco * (1 - this.desconto); //coloca-se this para referenciar a um atributo no mesmo objeto
    },
    empresa: 'Carros Vendas'
}; //o objeto produto tem três propriedades/atributos


console.log(produto.precoComDesconto());