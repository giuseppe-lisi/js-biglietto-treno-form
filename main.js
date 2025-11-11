let submitButton = document.getElementById("submit");
let finalPrice = document.getElementById("price");

submitButton.addEventListener("click", (event) => {

    event.preventDefault();

    let ageEl = document.getElementById("age").value;
    let kmEl = document.getElementById("km").value;
    console.log(ageEl, kmEl);
    

    if (age < 18) {
    ticketPrice = ticketPrice * 0.80;
    }
    if (age >= 65) {
        ticketPrice = ticketPrice * 0.60;
    }

    finalPrice.innerText = ticketPrice;
});

