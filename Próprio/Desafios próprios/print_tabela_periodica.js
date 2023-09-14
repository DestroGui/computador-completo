let tabelaSaindoDo = 3;
let tabelaPeriodicaAte = 5;

for (let i = 0; i <= 10; i++){
    if(i === 0){
        console.log(`Tabela periodica do ${tabelaSaindoDo}`);
    }

    console.log(`${tabelaSaindoDo} x ${i} = ${tabelaSaindoDo * i}`);

    if(i === 10 && tabelaSaindoDo < tabelaPeriodicaAte){
        i = -1;
     tabelaSaindoDo++;
    }
}