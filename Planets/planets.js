window.addEventListener('scroll', function() {
    const section = document.querySelector('section');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (sectionPosition < screenPosition) {
        section.classList.add('visible'); // Add visible class when scrolled into view
    } else {
        section.classList.remove('visible'); // Remove visible class when scrolled out of view
    }
});