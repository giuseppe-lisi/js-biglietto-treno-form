let km = parseInt(prompt("Quanti Km devi percorrere?"));
let age = parseInt(prompt("Quanti anni hai?"));
let pricePerKm = 0.21;
let ticketPrice = km * pricePerKm;

if (age < 18) {
    ticketPrice = ticketPrice * 0.80;
}
if (age >= 65) {
    ticketPrice = ticketPrice * 0.60;
}

alert(`Costo biglietto = ${ticketPrice}`);