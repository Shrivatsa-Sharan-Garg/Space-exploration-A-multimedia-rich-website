window.addEventListener('scroll', function() {
    const section = document.querySelector('section');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (sectionPosition < screenPosition) {
        section.classList.add('visible');
    } else {
        section.classList.remove('visible'); 
    }
});