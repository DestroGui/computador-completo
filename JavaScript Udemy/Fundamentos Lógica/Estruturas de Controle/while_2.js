const futuro = Date.now() + 10000; //10 segundos
let quantidade = 0;

while(Date.now() < futuro) {
    quantidade++;
}

console.log('Qtde:', quantidade);

console.log(Date.now()); //tempo em milissegundos desde 1970