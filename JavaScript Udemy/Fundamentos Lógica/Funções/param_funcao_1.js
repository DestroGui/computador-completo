function somar(a = 0, b = 0, c = 0, d = 0){ //assim colocamos o valor padrão, caso não seja passado, para 0
    return a + b + c + d
}

console.log(somar(1, 2, 3, 4, 5, 6)); //assim só ira ignorar o 5 e 6
console.log(somar(1, 2, 3, 4));
console.log(somar(1, 2, 3));
console.log(somar(1, 2));
console.log(somar(1));
console.log(somar());

console.log('Fim!')