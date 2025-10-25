function showMessage(text, isSuccess = true) {
    const box = document.getElementById('messageBox');
    const textElement = document.getElementById('messageText');
    const closeBtn = box.querySelector('.close-btn');

    textElement.textContent = text;

    box.classList.remove('success', 'error');

    if (isSuccess) {
        box.classList.add('success');
    } else {
        box.classList.add('error');
    }
    box.style.display = 'block';
}

document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const form = event.target;
    const submitBtn = document.getElementById('submitBtn');
    const originalBtnText = submitBtn.textContent;

    if (!form.checkValidity()) {
        showMessage("Please ensure all required fields are filled out correctly.", false);
        return;
    }

    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData.entries()) {
        if (['phone', 'subject'].includes(key)) {
            if (value.trim() !== '') {
                data[key] = value.trim();
            }
        } else {
            data[key] = value.trim();
        }
    }

    const API_ENDPOINT = "http://127.0.0.1:8000/contact/submit";

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
        let response = null;
        const MAX_RETRIES = 3;
        let delay = 1000;

        for (let i = 0; i < MAX_RETRIES; i++) {
            try {
                response = await fetch(API_ENDPOINT, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                break;
            } catch (e) {
                if (i === MAX_RETRIES - 1) throw e;
                await new Promise(resolve => setTimeout(resolve, delay));
                delay *= 2;
            }
        }

        if (!response) {
            throw new Error("Failed to get a response after retries.");
        }

        const result = await response.json();

        if (response.ok) {
            showMessage(result.message || "Your message has been successfully sent and saved!", true);
            form.reset();
        } else {
            let errorDetail = result.detail || "Error submitting message. The server responded with an issue.";
            if (Array.isArray(errorDetail)) {
                errorDetail = "Validation failed. Please check your inputs.";
            }
            showMessage(errorDetail, false);
        }

    } catch (error) {
        console.error('Fetch error:', error);
        showMessage("Could not connect to the backend server. Please check if the API server is running.", false);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
    }
});
