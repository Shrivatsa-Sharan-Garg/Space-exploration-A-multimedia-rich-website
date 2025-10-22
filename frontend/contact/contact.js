const form = document.getElementById("contactForm");

form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
        event.preventDefault();
        alert("Please fill in all required fields correctly.");
    } else {
        alert("Your message has been sent!");
    }
});