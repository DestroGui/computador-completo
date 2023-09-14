class Data {
    constructor(d = 1, m = 1, a = 1970) {
        this.dia = d
        this.mes = m
        this.ano = a
    }

    exibir() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const d1 = new Data();
console.log(d1);
console.log(d1.exibir());

const d2 = new Data(31, 7, 2023);
console.log(d2);

const d3 = new Data();
console.log(d3.exibir());

console.log(typeof d1);
console.log(typeof Data);