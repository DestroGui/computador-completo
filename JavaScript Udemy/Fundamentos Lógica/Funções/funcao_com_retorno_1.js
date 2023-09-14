function sempreRetornaUm(){
    return 1000;
    console.log('Fimmmm!!!')
}

function textoOuNumero(retornaTexto){
    if(retornaTexto) {
        return 'Sou um texto';
    } else {
        return 123;
    }
} 

//outra opção
function textoOuNumero2(retornaTexto2){
    return retornaTexto2 ? 'Sou outro texto' : 456;
} 

let resultado2 = textoOuNumero2(true);
console.log(resultado2);
console.log(textoOuNumero2(false));

let resultado = textoOuNumero(true);
console.log(resultado);
console.log(textoOuNumero(false));

let valor = sempreRetornaUm();
console.log(valor);