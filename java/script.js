document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const dateInput = document.getElementById('future_date');

    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const inputs = form.querySelectorAll('input, select, textarea');
        let isEmpty = false;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                alert(`Please fill in the ${input.placeholder || input.id || input.name} field.`);
                input.focus();
                isEmpty = true;
                return;
            }
        });

        if (isEmpty) return;

        const confirmationMessage = "Thank you for your inquiry! We will get back to you shortly.";
        alert(confirmationMessage);


        
        fetch(form.action, {
            method: form.method,
            body: new FormData(form)
        })
        .then(response => {
            if (response.ok) {
                alert("Form submitted successfully!");
                form.reset();
            }
        })
        .catch(error => {
            alert("Error submitting form. Please try again.");
            console.error("Form submission error:", error);
        });

    });
});