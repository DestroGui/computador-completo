// Parâmetro (Nota) -> Retorno (Conceito)

function retornoNota(a){
    if (a > 9) { return 'Conceito é A' }
    else if (a > 8 && a <= 9) { return 'Conceito é B' }
    else if (a > 6 && a <= 8) { return 'Conceito é C' }
    else if (a > 4 && a <= 6) { return 'Conceito é D' }
    else if (a > 2 && a <= 4) { return 'Conceito é E' }
    else if (a > 0 && a <= 2) { return 'Conceito é F' }
    return null;
}

let nota = 5;

console.log(`Dado a nota que tirou, o ${retornoNota(nota)}`);