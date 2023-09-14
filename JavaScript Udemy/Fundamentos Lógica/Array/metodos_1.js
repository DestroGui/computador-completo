const numeros = [1, 2, 3, 4, 5, 8, 4];

numeros.push(6);
numeros[0] = 100;

console.log(numeros.indexOf(4)); //vê qual o indice do 1° elemento 4
console.log(numeros.indexOf(4, 5)); //vê qual o indice do elemento 4 está, começando do indice 5

console.log(numeros.includes(10)); //vê se há o elemento 10 no array
console.log(numeros.includes(6)); //vê se há o elemento 6 no array

console.log(numeros.join(' esse, '));

console.log(numeros);


const numeros2 = numeros.concat(7, 8, 9); //gera um novo array
console.log(numeros2);