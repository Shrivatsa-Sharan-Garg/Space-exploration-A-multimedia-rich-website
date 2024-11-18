const apiKey = '1Xg2FffmZHikbXqgFi5e1eG3F42Q7QBvnOHk6Udd';

async function fetchData(date, sectionId) {
    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        showDataOnUI(data, sectionId);
    } catch (error) {
        console.error('Error fetching data:', error);
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
    'NGC 6744': '2024-11-01', 
    'Great Nebula': '2024-11-04',
    'Easter Island': '2024-11-05',
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

Object.entries(dates).forEach(([sectionId, date]) => fetchData(date, sectionId));