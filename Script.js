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
    const section = document.getElementById(sectionId);
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    const img = document.createElement("img");
    img.src = data.hdurl || data.url; 
    img.alt = data.title;

    const caption = document.createElement("p");
    caption.textContent = data.explanation;

    imgContainer.appendChild(img);
    imgContainer.appendChild(caption);
    section.appendChild(imgContainer);
}

const dates = {
    universe: '2024-11-01', 
    solarSystem:'',
    mercury: '',
    venus: '',
    earth: '2024-11-06',
    mars: '2024-11-10',
    saturn: '2024-11-02',
    jupiter: '2024-11-03',
    uranus: '',
    neptune: '2024-11-09',
};

Object.entries(dates).forEach(([sectionId, date]) => fetchData(date, sectionId));
