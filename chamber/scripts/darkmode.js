const toggleButton = document.querySelector(".check");
const main = document.querySelector("main");
const cards = document.querySelectorAll(".card");
const infoBox = document.querySelector(".info-box");

toggleButton.addEventListener("change", function () {
    if (toggleButton.checked) {
        main.style.background = "#000";
        main.style.color = "#fff";
        cards.forEach(function (card) {
            card.style.background = "#eee";
            card.style.color = "#000";
            card.style.boxShadow = "5px 5px 10px black";
        });
        infoBox.style.background = "#F1FAEE";
        infoBox.style.color = "#000";
        infoBox.style.boxShadow = "5px 5px 10px black";
    } else {
        main.style.background = "#eee";
        main.style.color = "#000";
        cards.forEach(function (card) {
            card.style.background = "#eee";
            card.style.color = "#000";
            card.style.boxShadow = "5px 5px 10px grey";
        });
        infoBox.style.background = "#F1FAEE";
        infoBox.style.color = "#000";
        infoBox.style.boxShadow = "5px 5px 10px grey";
    }
})