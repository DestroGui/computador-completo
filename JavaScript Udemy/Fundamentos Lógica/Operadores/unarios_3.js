console.log(!true);
console.log(!false);

console.log(!'Texto!'); //não + string = false
console.log(!!'Texto!'); //não + não + string = true
console.log(!!'');

console.log(!!1);
console.log(!!0); //todos os numeros serão verdadeiros, a não ser o 0
console.log(!!-1);
console.log(!!-0.0001);