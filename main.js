let form = document.querySelector("form");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    //form utente
    let nameEl = document.getElementById("name").value.trim();
    let kmEl = parseInt(document.getElementById("km").value);
    let ageEl = document.getElementById("age").value;
    
    //calcolo prezzo base
    let price = kmEl * 0.21;

    //elementi biglietto
    let passenger = document.getElementById("passenger");
    let offer = document.getElementById("offer");
    let finalPrice = document.getElementById("price");

    //controllo discount
    if (ageEl === "Minorenne") {
        price = price * 0.80;
    }
    if (ageEl === "Over 65") {
        price = price * 0.60;
    }

    //scrivo dati sul biglietto
    finalPrice.innerHTML = `€ ${price.toFixed(2)}`;
    passenger.innerText = nameEl;
    offer.innerText = ageEl
});

