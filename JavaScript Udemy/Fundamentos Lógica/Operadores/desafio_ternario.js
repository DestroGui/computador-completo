const a = 8;
const b = 4;
let operacao = '+'; // + - * /

const resultado = 
    operacao === '+' ? (a + b) : 
        operacao === '-' ? (a - b) : 
            operacao === '*' ? (a * b) : 
                operacao === '/' ? (a / b) :
                    'Resultado não valido';

console.log(resultado);