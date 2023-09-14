// Exercício 1
function cumprimentar(nome){
    return console.log(`Olá, ${nome}!`);
};

cumprimentar('Pedro');
console.log('\n');

// Exercício 2
function convercaoAnosEmDias(anos) {
    return console.log(anos * 365);
};

convercaoAnosEmDias(25);
console.log('\n');

// Exercício 3
const salario = function(horas, reaisPorHora) {
    return console.log(`Salário igual a R$ ${horas * reaisPorHora}.`);
}

salario(150, 40.5);
console.log('\n');

// Exercício 4
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const nomeDoMes = function(mesNumero) {
    return console.log(meses[mesNumero - 1]);
};

nomeDoMes(1);
nomeDoMes(5);
console.log('\n');

// Exercício 5
function maiorOuIgual(num1, num2) {
    if (num1 >= num2 && typeof num1 === typeof num2) { return true }
    else {return false}
}

console.log(maiorOuIgual(0, 5));
console.log(maiorOuIgual(5, 0));
console.log(maiorOuIgual(5, '0'));
console.log('\n');

// Exercício 6
function inverso(parametro) {
    if (parametro === true || parametro === false) { return console.log(!parametro)}
    else if(typeof parametro === 'number') {return console.log(parametro * (-1))}
    else {return console.log(`booleano ou números esperado, mas o parâmetro é do tipo ${typeof parametro}`)}
};

inverso(true);
inverso(200);
inverso('Texto');
inverso('6');
console.log('\n');

// Exercício 7
function estaEntre(numero, maximo, minimo, inclusivo = false) {
    if(inclusivo === true){
        if(numero >= minimo && numero <= maximo) {return console.log(true)}
        else {return console.log(false)}
    }
    else {
        if(numero > minimo && numero < maximo) {return console.log(true)}
        else {return console.log(false)}
    }
} // const saudacao = expressão ? Resp TRUE : Resp FALSE;

estaEntre(10, 100, 50);
estaEntre(3, 100, 3);
estaEntre(47, 100, 40);
estaEntre(47, 100, 47, true);
console.log('\n');

// Exercício 8
function multiplicando(num1, num2) {
    let somando = 0;
    for(let i = 0; i != num2; i++ ) {
        somando += num1
    }
    return console.log(somando);
};

multiplicando(6, 6);
multiplicando(5, 0);
console.log('\n');