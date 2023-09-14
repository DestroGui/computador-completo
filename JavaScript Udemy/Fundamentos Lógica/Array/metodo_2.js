const numeros = [1, 2, 3, 4, 5, 8, 4, 7, 9];

numeros.splice(1, 2); //eliminar a partir do indice 1 dois elementos 
console.log(numeros);

numeros.pop(); //elimina o ultimo numero do array
console.log(numeros.pop()); //elimina o ultimo, mas mostrará qual foi
console.log(numeros.pop());
console.log(numeros);