const cliente = {
    codigo: 16532,
    nome: 'Ana',
    vip: true,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123,
        complemento: 'Ap 101 Bloco B',
        pontosRef: [
            'Hospítal ao lado', 'Numero na calçada', 12384-000
        ]
    },
    nomeFilhos: ['Gabriel', 'Carlos', 'Daniela']
}

console.log(cliente.endereco.logradouro);
console.log(cliente.endereco.pontosRef[1]);
console.log(cliente.nomeFilhos);