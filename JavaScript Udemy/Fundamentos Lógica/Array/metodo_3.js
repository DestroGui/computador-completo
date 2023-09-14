const numeros = [10, 20, 30, 40, 50, 80];

function praCadaElemento(elemento, indice, array){
    console.log(elemento, indice, array);
}

numeros.forEach(praCadaElemento);

numeros.forEach(function(el) {
    console.log(el);
});

numeros.forEach(function(_, i) {
    console.log(i);
});


// numeros.forEach(function() {
//     console.log('Dentro do forEach')
// }); //Para cada elemento do array, ele vai chamar a função uma vez


// for (const n of numeros) {
//     console.log(n)
// }


// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
// }