const apiKey = '1Xg2FffmZHikbXqgFi5e1eG3F42Q7QBvnOHk6Udd';

async function fetchData() {
  try {
const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    showDataOnUI(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function showDataOnUI(data) {
  const imgContainer = document.getElementById("image-container");
  let img = document.createElement("img");
  img.src = data.hdurl;
  img.alt = data.title;
  imgContainer.style.backgroundImage = `url(${data.hdurl})`;
}

fetchData();