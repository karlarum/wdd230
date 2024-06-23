const baseURL = "https://karlarum.github.io/wdd230/"
const linksURL = "https://karlarum.github.io/wdd230/data/members.json"
const display = document.querySelector("article");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.members);
}

const displayLinks = (members) => {
    const linksContainer = document.getElementById('membersContainer');
    linksContainer.innerHTML = '';

    members.forEach((member) => {
        let memberSection = document.createElement('section');
        let memberTitle = document.createElement('h4');
        memberTitle.textContent = member.name;

        let address = document.createElement('p');
        address.textContent = `Address: ${member.address}`;

        let phoneNumber = document.createElement('p');
        phoneNumber.textContent = `Phone Number: ${member.phone}`;

        let email = document.createElement('p');
        email.textContent = `Email: ${member.email}`;

        let membershipLevel = document.createElement('p');
        membershipLevel = `Membership Level: ${member.membership}`;

        let websiteLink = document.createElement('a');
        websiteLink = member.website;
        membershipLevel.textContent = `Website:`;
        websiteLink.setAttribute('target', `_blank`);

        memberSection.appendChild(memberTitle);
        memberSection.appendChild(address);
        memberSection.appendChild(phoneNumber);
        memberSection.appendChild(email);
        memberSection.appendChild(membershipLevel);
        memberSection.appendChild(websiteLink);

        linksContainer.appendChild(memberSection);
    });
};

getLinks();

document.getElementById("grid").addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

document.getElementById("list").addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
};
