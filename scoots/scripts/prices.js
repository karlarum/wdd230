const url = 'data/prices.json';
const cards = document.querySelector('#pricingContainer');

async function getPricingData() {
    const response = await fetch(url);
    const data = await response.json();
    displayPricing(data.pricing);
}

getPricingData();

const displayPricing = (pricing) => {
    pricing.forEach((item) => {
        let card = document.createElement('section');
        card.className = 'pricing-item';

        let rentalType = document.createElement('h2');
        let image = document.createElement('img');
        let maxPersons = document.createElement('p');
        let reservationHalfDay = document.createElement('p');
        let reservationFullDay = document.createElement('p');
        let walkInHalfDay = document.createElement('p');
        let walkInFullDay = document.createElement('p');
        let buttonContainer = document.createElement('div');
        let button = document.createElement('a');

        rentalType.textContent = item.rentalType;
        image.setAttribute('src', item.image);
        image.setAttribute('alt', item.rentalType);
        image.setAttribute('loading', 'lazy');

        maxPersons.innerHTML = `Max Riders: ${item.maxPersons}`;
        reservationHalfDay.innerHTML = `Half Day Reservation: ${item.reservation.halfDay}`;
        reservationFullDay.innerHTML = `Full Day Reservation: ${item.reservation.fullDay}`;
        walkInHalfDay.innerHTML = `Half Day Walk-In: ${item.walkIn.halfDay}`;
        walkInFullDay.innerHTML = `Full Day Walk-In: ${item.walkIn.fullDay}`;

        buttonContainer.className = 'button-container';
        button.className = 'reservation-button';
        button.href = 'reservations.html'
        button.textContent = 'Book Now';

        buttonContainer.appendChild(button);

        card.appendChild(image);
        card.appendChild(rentalType);
        card.appendChild(maxPersons);
        card.appendChild(reservationHalfDay);
        card.appendChild(reservationFullDay);
        card.appendChild(walkInHalfDay);
        card.appendChild(walkInFullDay);
        card.appendChild(buttonContainer);

        cards.appendChild(card);
    });
};