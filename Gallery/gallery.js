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
    const factsContainer = document.querySelector('.Universe');
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
    'Intergalactic skyscape': '2024-11-07',
    'Comet Tsuchinshan-Atlas': '2024-11-06',
    Mars: '2024-11-10',
    Saturn: '2024-11-02',
    Jupiter: '2024-11-03',
    'Milky Way Galaxy': '2024-11-08',
    Neptune: '2024-11-09',
    'Moon': '2024-11-15',
    'Pluto': '2024-11-16',
};

Object.entries(dates).forEach(([sectionId, date]) => displaySpaceData(date, sectionId));

// Download image
function downloadImage(url, filename) {
    fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch((error) => console.error("Error downloading image:", error));
    }
    
// Initialize gallery
fetchImages();

function createStars(count) {
    const background = document.querySelector('#star-container');
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.width = `${Math.random() * 4 + 2}px`; 
        star.style.height = star.style.width; 
        star.style.animationDuration = `${Math.random() * 10 + 5}s`;
        background.appendChild(star);
    }
}

createStars(100); 