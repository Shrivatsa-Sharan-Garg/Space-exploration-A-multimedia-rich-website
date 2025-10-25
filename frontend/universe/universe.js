const FACTS_API_URL = 'http://127.0.0.1:8000/universe';
const factsContainer = document.querySelector('.Universe');

function renderFactCard(item) {
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    const title = document.createElement("h2");
    title.classList.add("section-title");
    title.textContent = item.name || 'Untitled Cosmic Object';

    const img = document.createElement("img");
    const imageUrl = item.img;
    img.src = imageUrl || 'https://placehold.co/320x220/415a77/ffcc00?text=Image+Missing';
    img.alt = item.name || 'Cosmic Image';

    img.onerror = () => {
        img.src = `https://placehold.co/320x220/415a77/ffcc00?text=Image+for+${encodeURIComponent(item.name || 'Fact')}...`;
        console.error(`Failed to load image for: ${item.name}`);
    };

    const caption = document.createElement("p");
    caption.textContent = item.fact || 'No detailed explanation provided by the API.';

    imgContainer.appendChild(title);
    imgContainer.appendChild(img);
    imgContainer.appendChild(caption);
    factsContainer.appendChild(imgContainer);
}

async function fetchUniverseFacts() {
    try {
        const response = await fetch(FACTS_API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}. Check if your local server is running.`);
        }
        const data = await response.json();

        const factsArray = data.universe;

        factsContainer.innerHTML = '';

        if (Array.isArray(factsArray) && factsArray.length > 0) {
            factsArray.forEach(renderFactCard);
        } else {
            factsContainer.innerHTML = `
                <p style="grid-column: 1 / -1; text-align: center; padding: 50px; color: #ffcc00;">
                    Server returned successfully, but the 'universe' array was empty or invalid.
                </p>`;
        }

    } catch (error) {
        console.error('Fetch error:', error);
        factsContainer.innerHTML = `
            <p style="grid-column: 1 / -1; text-align: center; padding: 50px; color: #ff6666; border: 1px solid #ff6666; border-radius: 10px; margin: 20px;">
                ⚠️ **Failed to load facts.**<br>Error: ${error.message}<br>Please verify your server is running at **${FACTS_API_URL}** and returning the correct JSON structure.
            </p>`;
    }
}

function createStars(count) {
    const background = document.querySelector('.background');
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;

        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = star.style.width;

        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * -15;

        star.style.setProperty('--duration', `${duration}s`);
        star.style.setProperty('--delay', `${delay}s`);

        background.appendChild(star);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchUniverseFacts();

    createStars(150);
});
