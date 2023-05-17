let km = parseInt(prompt('Quanti Km deisderi percorrere?'));
let age = parseInt(prompt('Quanti anni hai?'));
const tariffaKm = 0.21;
let costoBiglietto;

console.log(km)
console.log(age)

//controllo che i dati inseriti siano dei numeri
if (isNaN(age) || isNaN(km)) {
    alert('I dati devono essere inseriti come numeri')
} else {
    //calcolo il prezzo del biglietto
    if (age < 18) {
        //applico uno sconto del 20%
        costoBiglietto = (km * tariffaKm) - (((km * tariffaKm) / 100) * 20)
    }
    else if (age > 65) {
        //applico uno sconto del 40%
        costoBiglietto = (km * tariffaKm) - (((km * tariffaKm) / 100) * 40)
    } else {
        //applico la tariffa normale
        costoBiglietto = km * tariffaKm
    }
    console.log(costoBiglietto)
    document.getElementById('costo').innerHTML = `il costo del biglietto è ${costoBiglietto}`
}

