// Duas expressões TRUE juntando Aritméticos / Relacionais / Lógicos
console.log('Quando dará o calculo 5 + 4 ?');
let respostaCorreta = 9; //verdadeira
let resposta1 = 10;
let resposta2 = 8;
let respostaLog1 = true;
let respostaLog2 = false;

let resultado1 = resposta1 > respostaCorreta;
let resultado2 = resposta2 != respostaCorreta;
console.log(resposta1, '> que o resultado?'); //true
console.log(resposta2, '!= do resultado?'); //true
console.log('Resposta AND:', resultado1 && resultado2, ',isto nos da pistas do resultado');
console.log('Resposta OR:', resultado1 || resultado2, ',isto nos da pistas do resultado');

// Duas expressões FALSE juntando Aritméticos / Relacionais / Lógicos
let falso1 = !(( 5 + 9 ) < 15);
let falso2 = (( 5 + 9 ) > 15) || (( 5 + 11) >= 25);


console.log(falso1);
console.log(falso2);