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
  img.src = data.hdurl || data.url; // Some APOD entries are videos; fallback to url.
  img.alt = data.title;

  const caption = document.createElement("p");
  caption.textContent = data.explanation;

  imgContainer.appendChild(img);
  imgContainer.appendChild(caption);
  section.appendChild(imgContainer);
}

// Fetch images for each section
const dates = {
  universe: '2024-11-01', // Example date
  solarSystem: '2024-11-02',
  planets: '2024-11-03'
};

Object.entries(dates).forEach(([sectionId, date]) => fetchData(date, sectionId));
