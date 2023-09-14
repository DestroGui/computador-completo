// Programar tudo que aprendeu até agora

function somar(a, b) {
    return a + b;
}
console.log(somar(5, 8));

console.log('_________________________________________________________________')

function textoSaudacao(horario) {
    if (horario <= 11 && horario > 0) {
        return `Bom dia, são ${horario} da manhã!`
    } else if (horario > 11 && horario <= 18) {
        return `Boa tarde, são ${horario} da tarde!`
    } else if (horario > 18 && horario <= 24) {
        return `Boa noite, são ${horario} da noite!`
    } else { return `Horario ${horario} não válido` }
}
console.log(textoSaudacao(5), '\n', textoSaudacao(15), '\n', textoSaudacao(23), '\n', textoSaudacao(-2))

console.log('_________________________________________________________________')

function media(a, b, c){
    return (a + b + c) / 3;
}
const nota = function (a, b, c){
    notaMedia = media(a, b, c);
    return notaMedia >= 7 ? 'Foi aprovado' : (notaMedia >4 ? 'Esta de recuperação' : 
        (notaMedia > 0 ? 'Reprovado' : 'Nota não valida'))
    return;
}
console.log(nota(5, -5, -1));

console.log('_________________________________________________________________')

let c = ``;
let j = 1;
for(let i = 1; j < 6; i++){
    c += `[${j}, ${i}]`
    if (i > 4){
        c += `\n`
        j++;
        i = 0;
    }
}
console.log(c)

