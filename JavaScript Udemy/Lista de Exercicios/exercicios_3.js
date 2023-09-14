function objetoParaArray (objeto) {
    let cont = 0;
    let imprimir = [];
    let chaves = Object.keys(objeto);
    for (let i in objeto) {
        imprimir[cont] = [chaves[cont], objeto[i]]
        cont++
    }
    return console.log(imprimir)
}

objetoParaArray({
    nome: 'Maria',
    data: 25,
    mes: 'Maio',
    ano: 2001,
})

objetoParaArray({
    nome: 'Maria',
    gustavo: true,
    mes: 5790,
    xalan: '2001',
})