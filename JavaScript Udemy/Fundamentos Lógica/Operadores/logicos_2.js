let t1 = true;
let t2 = true;

console.log('Vamos comprar a TV de 50" ?', (t1 && t2), '!!'); // AND
console.log('Vamos comprar a TV de 32" ?', (t1 !== t2), '!!'); // XOR

let tomarSorvete = t1 || t2;
console.log('Vamos comprar sorvete" ?', tomarSorvete, '!!'); // OR

let ficarEmCasa = !tomarSorvete;
console.log('Vamos ficar em casa ?', ficarEmCasa, '!!'); // NOT