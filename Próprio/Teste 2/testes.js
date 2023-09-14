//agora eu sei lista

const numero = [10, 20, 30, 40, 50, 60];
console.log (numero);

numero.push(70, 80, 90); //add os numeros no final
console.log (numero);

console.log(numero.length); //mostra o tamanho do array

const tirando_numero = numero.splice(2, 3); //a partir do indice 2 (que no caso é o 30), tire 3 elementos
console.log(tirando_numero);
console.log(numero);

const retornando_numero = numero.concat(tirando_numero); //concatenar dois arrays
console.log(retornando_numero);

const todosMenoresQueCem = retornando_numero.every(function(retornando_numero) {
    return retornando_numero < 100;
});
console.log(todosMenoresQueCem); //verifica se todos os numeros do array passam no teste

const numerosMaiorQueCinquenta = retornando_numero.filter(function(numero) {
    return numero >= 50;
});
console.log(numerosMaiorQueCinquenta); //criar um novo array com todos os elementos que passam em um teste definido por uma função de retorno de chamada
