function createFallingStars(count) {
    const starContainer = document.getElementById('star-container');
    for (let i = 0; i < count; i++) {
        const fallingStar = document.createElement('div');
        fallingStar.classList.add('star', 'falling-star');
        const x = Math.random() * 100; 
        const size = Math.random() * 4 + 2; 
        const animationDuration = Math.random() * 3 + 2; 

        fallingStar.style.left = `${x}%`;
        fallingStar.style.width = `${size}px`;
        fallingStar.style.height = `${size}px`;
        fallingStar.style.animationDuration = `${animationDuration}s`;

        starContainer.appendChild(fallingStar);
    }
}

createFallingStars(50);