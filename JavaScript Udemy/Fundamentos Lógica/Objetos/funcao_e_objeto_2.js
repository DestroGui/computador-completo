function criarData(dia, mes, ano) {
    return {
        dia,
        mes,
        ano,
        noCalendario() {
            return `${this.dia} de ${this.mes} de ${this.ano}`;
        }
    };
};

const d1 = criarData(9, 'Fevereiro', 2023);
const d2 = criarData(22, 'agosto', 2119);
const d3 = criarData(50, 'abril', 1957);

console.log(d1.noCalendario());
console.log(d2.noCalendario());
console.log(d3.noCalendario());