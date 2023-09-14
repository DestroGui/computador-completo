//Função Construtora (Classe) -> Objeto
function Data(dia = 1, mes = 1, ano = 2021) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;

    this.exibir = function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    };
};

const d1 = new Data();
d1.ano = 1548;

const d2 = new Data(5, 1, 2021);
const d3 = new Data(7, 9, 1957);
const d4 = new Data(4, 8, 2023);

console.log(typeof d1);

console.log(d1);
console.log(d2);
console.log(d3);
console.log(d4);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());
console.log(d4.exibir());