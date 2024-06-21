const baseURL = "https://karlarum.github.io/wdd230/";
const linksURL = "https://karlarum.github.io/wdd230/data/links.json"

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

const displayLinks = (lessons) => {
    const linksContainer = document.getElementById('linksContainer');
    linksContainer.innerHTML = '';

    lessons.forEach((lesson) => {
        let lessonSection = document.createElement('section');
        let lessonTitle = document.createElement('h4');
        let linksList = document.createElement('ul');

        lessonTitle.textContent = `Lesson ${lesson.lesson}`;

        lesson.links.forEach((link) => {
            let listItem = document.createElement('li');
            let anchor = document.createElement('a');
            anchor.href = link.url.startsWith('https') ? link.url : `${baseURL}${link.url}`;
            anchor.textContent = link.title;
            anchor.setAttribute('target', '_blank');

            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });
        lessonSection.appendChild(lessonTitle);
        lessonSection.appendChild(linksList);
        linksContainer.appendChild(lessonSection);
    });
};

getLinks();