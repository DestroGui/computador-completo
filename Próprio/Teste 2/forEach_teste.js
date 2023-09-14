const numeros = [5, 9, 7, 18, 79, 49, 8];
let somatoria = 0;

numeros.forEach(function somandoTodos(elemento) {
    somatoria += elemento
});

console.log(somatoria);

numeros.forEach(function mostrandoIndices(elemento, indice) {
    console.log(`${elemento} é o elemento, agora ${indice} é o indice dele`);
});

numeros.forEach(function mostrarArray(_, _, array) {
    console.log(`desta forma mostrará sempre o array ${array} pela quantidade ${numeros.length}`)
});