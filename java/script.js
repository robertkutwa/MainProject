// script.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('bookingForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const searchButton = document.querySelector('.btn'); // Get the search button

    // Form Submission Handling
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch('your-server-endpoint', { // Replace with your server URL
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Or response.text()
        })
        .then(data => {
            console.log('Success:', data);
            confirmationMessage.style.display = 'block';
            form.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            confirmationMessage.textContent = "An error occurred. Please try again.";
            confirmationMessage.style.color = "red";
            confirmationMessage.style.display = 'block';
        });
    });

    // Search Functionality
    if (searchButton) { // Check if the button exists (important for pages without it)
        searchButton.addEventListener('click', function () {
            const query = document.querySelector('.srch').value.toLowerCase();
            window.location.href = `services.html?search=${query}`;
        });
    }


    // Datepicker Initialization (assuming you're using jQuery UI)
    if (typeof $ === 'function') { // Check if jQuery is loaded
        $("#future_date").datepicker({
            minDate: 0,
            dateFormat: 'yy-mm-dd'
        });
    } else {
        console.error("jQuery is not loaded. Datepicker will not initialize.");
    }
});