let form = document.querySelector("form");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    let nameEl = document.getElementById("name").value.trim();
    let ageEl = document.getElementById("age").value;
    let kmEl = parseInt(document.getElementById("km").value);
    
    let price = kmEl * 0.21;
    let passenger = document.getElementById("passenger");
    let offer = document.getElementById("offer");
    let finalPrice = document.getElementById("price");

    if (ageEl === "Minorenne") {
        price = price * 0.80;
    }
    if (ageEl === "Over 65") {
        price = price * 0.60;
    }

    passenger.innerText = nameEl;
    offer.innerText = ageEl
    finalPrice.innerHTML = `€ ${price.toFixed(2)}`;
});

