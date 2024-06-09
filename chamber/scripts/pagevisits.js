function getVisitMessage() {
    const lastVisit = localStorage.getItem("lastVisit");

    if (!lastVisit) {
        return "Welcome! Let us know if you have any questions.";
    }

    const lastVisitDate = new Date(lastVisit);
    const now = new Date();
    const diffInDays = Math.floor((now - lastVisitDate) / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) {
        return "Back so soon! Awesome!";
    } else {
        const daysMessage = diffInDays === 1 ? "day" : "days";
        return `You last visited ${diffInDays} ${daysMessage} ago.`;
    }
}

function displayMessage() {
    const visitMessage = document.querySelector(".visits");
    visitMessage.textContent = getVisitMessage();
}

displayMessage();

localStorage.setItem("lastVisit", new Date().toISOString());