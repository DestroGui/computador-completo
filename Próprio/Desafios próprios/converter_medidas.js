let medidaKm = 1;

function conversaoKmParaMilhas (kilometros){
    let milhas = kilometros * 0.621371;
    return milhas;
}

console.log(`${medidaKm} Km = ${conversaoKmParaMilhas(medidaKm)} milhas`);