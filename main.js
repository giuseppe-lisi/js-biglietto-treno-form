let form = document.querySelector("form");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    let nameEl = document.getElementById("name").value.trim();
    let ageEl = document.getElementById("age").value;
    let kmEl = parseInt(document.getElementById("km").value);
    
    let price = kmEl * 0.21;
    let finalPrice = document.getElementById("price");
    let passenger = document.getElementById("passenger");

    if (ageEl < 18) {
        price = price * 0.80;
    }
    if (ageEl >= 65) {
        price = price * 0.60;
    }

    passenger.innerText = nameEl;
    finalPrice.innerHTML = `€ ${price.toFixed(2)}`;
});

