const a = 10;
const b = 28;
const operacao = 'a'; // + - / * %

let resultado;

if (operacao == '+') {
    resultado = a + b;
} else if (operacao == '-'){
    resultado = a - b;
} else if (operacao == '/'){
    resultado = a / b;
} else if (operacao == '*'){
    resultado = a * b;
} else if (operacao == '%'){
    resultado = a % b;
} else {
    resultado = "Codigo invalido"
}

console.log(resultado);