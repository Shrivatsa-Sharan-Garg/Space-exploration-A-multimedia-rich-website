function createStars(count) {
    const background = document.querySelector('#star-container');
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