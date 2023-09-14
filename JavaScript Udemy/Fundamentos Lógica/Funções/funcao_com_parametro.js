function executar(parametro) {
    if(typeof parametro === 'function'){
        console.log (parametro());
    }
}

function bomDia() {
    return 'Bom dia!';
}

executar(bomDia);

const x = bomDia; //aqui esta colocando tanto x quanto bomDia como a mesma função, com o mesmo nome
const y = bomDia(); //aqui esta passando o retorno da função para o y

console.log(x());
console.log(y);