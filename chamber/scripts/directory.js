// const baseURL = "https://karlarum.github.io/wdd230/chamber/index.html"
const linksURL = "https://karlarum.github.io/wdd230/chamber/data/members.json";
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
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let email = document.createElement('p');
        let membershipLevel = document.createElement('p');
        let websiteLink = document.createElement('a');
        let image = document.createElement('img');

        memberTitle.textContent = member.name;
        address.textContent = `${member.address}`;
        phoneNumber.textContent = `Phone Number: ${member.phone}`;
        email.textContent = `Email: ${member.email}`;
        membershipLevel.textContent = `Membership Level: ${member.membership}`;
        websiteLink.href = member.website;
        websiteLink.textContent = `Website`;
        websiteLink.setAttribute('target', `_blank`);
        image.src = member.image;
        image.alt = member.name;

        memberSection.appendChild(memberTitle);
        memberSection.appendChild(image);
        memberSection.appendChild(address);
        memberSection.appendChild(phoneNumber);
        memberSection.appendChild(email);
        memberSection.appendChild(membershipLevel);
        memberSection.appendChild(websiteLink);

        display.appendChild(memberSection);
    });
};

getLinks();

document.getElementById("membersGrid").addEventListener("click", () => {
    display.classList.add("membersGrid");
    display.classList.remove("membersList");
});

document.getElementById("membersList").addEventListener("click", showList);

function showList() {
    display.classList.add("membersList");
    display.classList.remove("membersGrid");
};