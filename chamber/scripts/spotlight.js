const linksURL = "https://karlarum.github.io/wdd230/chamber/data/members.json";
const spotlightContainer = document.getElementById('spotlightContainer');

async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displaySpotlight(data.members);
}

function getRandomMembers(members, count) {
    const shuffled = members.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displaySpotlight(members) {
    const memberStatus = members.filter(member => member.membership === "Gold Membership" || member.membership === "Silver Membership");
    const selectMembers = getRandomMembers(memberStatus, 3);

    spotlightContainer.innerHTML = '';

    selectMembers.forEach(member => {
        let listItem = document.createElement('li');
        let memberLink = document.createElement('a');

        memberLink.href = member.website;
        memberLink.textContent = member.name;
        memberLink.setAttribute('target', '_blank');

        listItem.appendChild(memberLink);
        spotlightContainer.appendChild(listItem);
    });
}

getMembers();