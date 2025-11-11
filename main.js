let submitButton = document.getElementById("submit");
let finalPrice = document.getElementById("price");

submitButton.addEventListener("click", (event) => {

    event.preventDefault();

    let ageEl = document.getElementById("age").value;
    let kmEl = document.getElementById("km").value;
    let price = kmEl * 0.21;

    if (ageEl < 18) {
        price = price * 0.80;
    }
    if (ageEl >= 65) {
        price = price * 0.60;
    }

    finalPrice.innerText = price.toFixed(2);
});

