const nota1 = 2;
const nota2 = -7;
const nota3 = -5;
let somaNotas = 0;
let mediaNotas = 0;
// descartar a menor nota, calcular a média entre as outras duas, e mostrar o conceito

function descartarMenorNota(n1, n2, n3){
    if (n1 > n2 || n1 > n3) { somaNotas += n1}
    if (n2 > n3 || n2 > n1) { somaNotas += n2}
    if (n3 > n1 || n3 > n2) { somaNotas += n3}
    return somaNotas;
}

function calcularMedia(somaNotas){
    return mediaNotas = somaNotas / 2;
}

function conceitoDaNota(mediaNotas){
    switch(Math.ceil(mediaNotas)){
        case 10: case 9: case 8: case 7: 
            return 'Conceito Aprovado';
            break;
        case 6: case 5: case 4:
            return 'Conceito Recuperação';
            break;
        case 3: case 2: case 1: case 0:
            return 'Conceito Reprovado';
            break;
        default: null;
    }

}

console.log(`A soma das notas será de: ${descartarMenorNota(nota1, nota2, nota3)}, com o somaNotas sendo = ${somaNotas}`);
console.log(`A média das notas será de: ${calcularMedia(somaNotas)}, com o mediaNotas sendo = ${mediaNotas}`)
console.log(`O conceito será ${conceitoDaNota(mediaNotas)}`)

console.log('\n')

//outra opção, a resposta do vídeo
const nota4 = 5;
const nota5 = 9;
const nota6 = 8;

function minimo(n1, n2){
    return n1 <= n2 ? n1 : n2;
}

function media(n1, n2, n3){
    const menorNota = minimo(nota4, minimo(nota5, nota6));
    if(menorNota === n1){
        return (n2 + n3) / 2;
    } else if(menorNota === n2){
        return (n1 + n3) / 2;
    } else {
        return (n1 + n2) / 2;
    }
}

function mediaParaStatus(media){
    if(media >= 7){
        return 'Aprovado'
    } else if(media >= 4){
        return 'Recuperação';
    } else {
        return 'Reprovado';
    }
}

const notaMinima = minimo(nota4, minimo(nota5, nota6))
const mediaDasNotas = media(nota4, nota5, nota6)
const statusDaNota = mediaParaStatus(mediaDasNotas);

console.log(`A menor nota vai ser calculada por minimo(nota4, minimo(nota5, nota6)) e dá ${notaMinima}`);
console.log(`A media vai ser calculada por media(nota4, nota5, nota6) e dá ${mediaDasNotas}`)
console.log(statusDaNota);