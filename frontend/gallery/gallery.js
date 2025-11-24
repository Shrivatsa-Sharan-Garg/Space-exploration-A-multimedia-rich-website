const API_KEY = "bY6Q-_0I7DhfBJo9-h7b0TwzKCDQKBAF1h_Q_w-rjAk";
const QUERY = "Space";  
const NO = 27;

function fetchImages() {
    const url = `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${QUERY}&per_page=${NO}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayImages(data.results);  
        })
        .catch(error => console.error("Error fetching images:", error));
}

function displayImages(images) {
    const gallery = document.getElementById("gallery");

    images.forEach(image => {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");

        const img = document.createElement("img");
        img.src = image.urls.small;
        img.alt = image.alt_description || "Space Image";

        galleryItem.appendChild(img);

        img.onload = () => {
            const rowSpan = Math.ceil(img.naturalHeight / 100);
            galleryItem.style.gridRowEnd = `span ${rowSpan}`;
        };

        const downloadBtn = document.createElement("button");
        downloadBtn.classList.add("download-btn");
        downloadBtn.innerText = "Download";
        downloadBtn.addEventListener("click", () => downloadImage(image.urls.full));
        galleryItem.appendChild(downloadBtn);

        gallery.appendChild(galleryItem);
    });
}

function downloadImage(url) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "space-image.jpg";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(error => console.error("Error downloading image:", error));
}

fetchImages();

function createStars(count) {
    const background = document.body;
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
