// Exercício 9
function repetir(parametro, vezes) {
    let array = [];
    for(let i = 0; i != vezes; i++){
        array[i] = parametro;
    }
    return console.log(array);
}

repetir('Acerto mizeravi', 3);
repetir(5, 7);
console.log('\n');

// Exercício 10
let simboloMais = function(vezes) {
    let printando = '';
    for(let i = 0; i != vezes; i++) {
        printando += '+'
    }
    return console.log(printando);
}

simboloMais(5);
simboloMais(10);
console.log('\n');

// Exercício 11
function receberPrimeiroEUltimoElemento(lista) {
    let minhaLista = [];
    for(var i = 0; lista[i] != undefined; i++){
        if(i === 0){
            minhaLista[i] = lista[i]
        }
    }
    minhaLista[1] = lista[i - 1]
    return console.log(minhaLista) 
}
receberPrimeiroEUltimoElemento([5, 7, 8, 10, 8, 'Ola']);
console.log('\n');

// Exercício 12
function removerPropriedade(objeto, propriedade) {
    let objetoNovo = {};
    for (let i in objeto) {
        if(!Object.is(i, propriedade)){
            objetoNovo[i] = objeto[i];
        }
    }
    return console.log(objetoNovo)
}

removerPropriedade({a: 'ola', b: 21, c: false}, 'b');
removerPropriedade({a: 'ola', b: 21, c: false, d: 'Aqui não'}, 'c');
console.log('\n');

// Exercício 13
function filtrarNumero(lista){
    let lis = 0;
    novaLista = [];
    for (const i in lista) {
        if (typeof lista[i] == 'number') {
            novaLista[lis] = lista[i];
            lis++;
        }
    }
    return console.log(novaLista);
}

filtrarNumero([5, 'a', 3, true]);
filtrarNumero([5, 'a', 3, 9, 'vinte', false, true]);
