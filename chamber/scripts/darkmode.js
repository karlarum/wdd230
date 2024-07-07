const toggleButton = document.querySelector(".check");
const main = document.querySelector("main");
const pageVisitsCard = document.querySelector("#pagevisits");
const metricsCard = document.querySelector("#metrics");
const eventsCard = document.querySelector("#events");
const attractionsCard = document.querySelector("#attractions");
const infoBox = document.querySelector(".info-box");

const cards = [pageVisitsCard, metricsCard, eventsCard, attractionsCard].filter(card => card !== null);

toggleButton.addEventListener("change", function () {
    if (toggleButton.checked) {
        main.style.background = "#000";
        main.style.color = "#fff";

        cards.forEach(function (card) {
            card.style.background = "#000";
            card.style.color = "white";
            card.style.boxShadow = "5px 5px 10px black";
            card.style.border = "1px solid white";
        });

        if (infoBox) {
            infoBox.style.background = "#000";
            infoBox.style.color = "#eee";
            infoBox.style.boxShadow = "5px 5px 10px black";
            infoBox.style.border = "1px solid white";
        }
    } else {
        main.style.background = "white";
        main.style.color = "#000";

        cards.forEach(function (card) {
            card.style.background = "white";
            card.style.color = "#000";
            card.style.boxShadow = "5px 5px 10px grey";
            card.style.border = "none";
        });
        if (infoBox) {
            infoBox.style.background = "#F1FAEE";
            infoBox.style.color = "#eee";
            infoBox.style.boxShadow = "5px 5px 10px grey";
            infoBox.style.border = "none";
        }
    }
});