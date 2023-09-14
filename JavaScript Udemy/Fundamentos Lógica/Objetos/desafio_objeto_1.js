// Objeto data 
// Atributos: dia, mes e ano
// Método: exibir -> data/mes/ano

const data = {
    dia: 05,
    mes: 'abril',
    ano: 2023,
    noCalendario: function(){
        return `${this.dia} de ${this.mes} de ${this.ano}`;
    }
};

console.log(data.noCalendario());