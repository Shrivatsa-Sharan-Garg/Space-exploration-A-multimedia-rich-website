const PLANETS_API_URL = 'http://127.0.0.1:8000/planets';
const container = document.getElementById('planets');
const loadingMessage = document.getElementById('loading-message');

function createPlanetCard(planet) {
    const article = document.createElement('article');
    article.className = 'planet-card';
    article.id = planet.name.toLowerCase().replace(/\s+/g, '-');
    const h3 = document.createElement('h3');
    h3.textContent = planet.name;
    const img = document.createElement('img');
    img.src = planet.img || `https://placehold.co/400x300/1a1a5f/00e5ff?text=${planet.name}`;
    img.alt = `Image of ${planet.name}`;
    img.onerror = () => {
        img.src = `https://placehold.co/400x300/601e3e/ffffff?text=Image+Failed`;
    };

    const p = document.createElement('p');
    p.textContent = planet.description;

    article.appendChild(h3);
    article.appendChild(img);
    article.appendChild(p);

    return article;
}

async function fetchAndRenderPlanets() {
    try {
        const response = await fetch(PLANETS_API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();

        let planetsArray = [];
        if (Array.isArray(data)) {
            planetsArray = data;
        } else if (data && Array.isArray(data.planets)) {
            planetsArray = data.planets;
        }

        if (loadingMessage && loadingMessage.parentNode) {
            loadingMessage.parentNode.removeChild(loadingMessage);
        }

        if (planetsArray.length > 0) {
            planetsArray.forEach((planet, index) => {
                const card = createPlanetCard(planet);
                container.appendChild(card);
                setTimeout(() => {
                    card.classList.add('loaded');
                }, 100 * index);
            });
        } else {
            container.innerHTML += `<p style="color: #ff0000; width: 100%; text-align: center; margin-top: 30px;">
                Error: No planet data received or data structure is incorrect.
            </p>`;
        }
    } catch (error) {
        console.error('Error fetching or processing planets data:', error);
        if (loadingMessage && loadingMessage.parentNode) {
            loadingMessage.parentNode.removeChild(loadingMessage);
        }
        container.innerHTML += `<p style="color: #ff0000; width: 100%; text-align: center; margin-top: 30px;">
            Failed to load planet data from ${PLANETS_API_URL}. Check your backend server and console for details.
        </p>`;
    }
}

window.onload = fetchAndRenderPlanets;
