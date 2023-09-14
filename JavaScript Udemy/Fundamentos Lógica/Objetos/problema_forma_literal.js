// código muito duplicado
const d1 = {
    dia: 05,
    mes: 'abril',
    ano: 2023,
    noCalendario: function(){
        return `${this.dia} de ${this.mes} de ${this.ano}`;
    }
};

const d2 = {
    dia: 22,
    mes: 'janeiro',
    ano: 2119,
    noCalendario: function(){
        return `${this.dia} de ${this.mes} de ${this.ano}`;
    }
};

const d3 = {
    dia: 10,
    mes: 'dezembro',
    ano: 1957,
    noCalendario: function(){
        return `${this.dia} de ${this.mes} de ${this.ano}`;
    }
};

console.log(d1.noCalendario());
console.log(d2.noCalendario());
console.log(d3.noCalendario());