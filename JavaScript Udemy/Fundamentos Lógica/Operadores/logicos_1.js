let temDinheiro = false;
let estaEnsolarado = true;
let carroEstaNaGaragem = false;

console.log('And');
let resultadoE = '#1 - Vai pro shopping? ';
resultadoE += temDinheiro && estaEnsolarado; // && = and
console.log(resultadoE + '\n');

console.log('Or');
let resultadoOU = '#2 - Vai para o shopping? ';
resultadoOU += estaEnsolarado || carroEstaNaGaragem; // || = or
console.log(resultadoOU + '\n');

console.log('Exclusive or');
console.log(true != false); //Exclusive or -> É necessario os dois resultados serem diferentes
console.log(true != true);
console.log(false != false);
console.log(false != true);

console.log('\n' + 'NOT ____');
console.log(!true); // not verdadeiro = falso
console.log(!false); // not falso = verdadeiro