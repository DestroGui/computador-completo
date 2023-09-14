const notas = [7, 8, 3, 5, 10, 9, 8, 8];

for(let nota of notas) { // Com of ele vai entrar nos valores
    console.log(nota);
}

let valores = '';

for(let nota of notas) {
    valores += nota + ' ';
}

console.log(valores);
let indices = '';

for(let indice in notas) { //Com in vai me dar a posição
    indices += indice + ' ';
}

console.log(indices);