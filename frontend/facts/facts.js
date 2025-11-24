function createStars(count) {
    const background = document.querySelector('.background');
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const animationDuration = Math.random() * 5 + 5;
        const size = Math.random() * 2 + 1;

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${animationDuration}s`;
        star.style.animationDelay = `-${Math.random() * 10}s`;

        background.appendChild(star);
    }
}

function renderFactCard(factData) {
    const factsContainer = document.querySelector('.Facts');
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    const title = document.createElement("h2");
    title.classList.add("section-title");
    title.textContent = factData.name || "Amazing Space Fact";

    const img = document.createElement("img");
    img.src = factData.img;
    img.alt = factData.name || "Space Fact Image";
    img.onerror = () => {
        img.src = 'https://placehold.co/300x200/5C2D91/FFFFFF?text=Image+Missing';
        console.error(`Failed to load image for: ${factData.name || 'a fact'}`);
    };

    const factText = document.createElement("p");
    factText.textContent = factData.fact || factData.description || "No fact description available.";

    imgContainer.appendChild(title);
    imgContainer.appendChild(img);
    imgContainer.appendChild(factText);
    factsContainer.appendChild(imgContainer);
}

async function fetchAndRenderFacts() {
    const factsContainer = document.querySelector('.Facts');
    const apiEndpoint = 'http://127.0.0.1:8000/facts';

    try {
        const response = await fetch(apiEndpoint);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const factsArray = data.facts;

        if (Array.isArray(factsArray) && factsArray.length > 0) {
            factsArray.forEach(renderFactCard);
        } else {
            factsContainer.textContent = 'No facts found or API returned empty data.';
        }

    } catch (error) {
        console.error('Error fetching or processing facts data:', error);
        factsContainer.innerHTML = `<p style="color: red; text-align: center; padding-top: 50px;">
            Failed to load facts. Check your FastAPI server at
            <strong>${apiEndpoint}</strong> and ensure the server is running.
        </p>`;
    }
}

window.onload = () => {
    fetchAndRenderFacts();
    createStars(100);
};
