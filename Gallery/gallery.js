const API_KEY = "bY6Q-_0I7DhfBJo9-h7b0TwzKCDQKBAF1h_Q_w-rjAk";

function fetchImages() {
    const url = `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=space&per_page=12`; 

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
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("gallery-item");

        const img = document.createElement("img");
        img.src = image.urls.small; 
        img.alt = image.alt_description || "Space Image";
        imageContainer.appendChild(img);

        const downloadButton = document.createElement("button");
        downloadButton.innerText = "Download";
        downloadButton.classList.add("download-btn");
        downloadButton.addEventListener("click", () => downloadImage(image.urls.full)); 
        imageContainer.appendChild(downloadButton);

        gallery.appendChild(imageContainer);
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