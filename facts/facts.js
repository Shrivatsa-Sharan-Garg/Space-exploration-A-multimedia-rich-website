import { fetchData } from '../main/api.js';

async function displaySpaceData(date, sectionId) {
    try {
        const data = await fetchData(date, sectionId);
        showDataOnUI(data, sectionId);
    } catch (error) {
        console.error('Error displaying data:', error);
    }
}

function showDataOnUI(data, sectionId) {
    const factsContainer = document.querySelector('.Facts'); 
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    const title = document.createElement("h2");
    title.classList.add("section-title");
    title.textContent = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);

    const img = document.createElement("img");
    img.src = data.hdurl || data.url; 
    img.alt = data.title;

    const caption = document.createElement("p");
    caption.textContent = data.explanation;

    imgContainer.appendChild(title);
    imgContainer.appendChild(img);
    imgContainer.appendChild(caption);
    factsContainer.appendChild(imgContainer);
}

const dates = {
    'LDN 1471': '2024-11-17',
    'NGC 281': '2024-11-18',
    'M106': '2024-10-09',
    'intergalactic skyscape': '2024-11-07',
    'Comet Tsuchinshan-Atlas': '2024-11-06',
    mars: '2024-11-10',
    saturn: '2024-11-02',
    jupiter: '2024-11-03',
    'Milky Way Galaxy': '2024-11-08',
    neptune: '2024-11-09',
    'Moon': '2024-11-15',
    'Pluto': '2024-11-16',
};

Object.entries(dates).forEach(([sectionId, date]) => displaySpaceData(date, sectionId));

function createStars(count) {
    const background = document.querySelector('.background');
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const x = Math.random() * 100; 
        const y = Math.random() * 100; 
        const animationDuration = Math.random() * 5 + 5; 
        const size = Math.random() * 4 + 2; 

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${animationDuration}s`;

        background.appendChild(star);
    }
}

createStars(100);
