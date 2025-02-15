// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Log the data to the console (for demonstration)
    console.log("Report Data:", data);

    // Display success message
    showToast("Report submitted successfully! Thank you for your help.");

    // Clear the form
    event.target.reset();
}

// Function to show a Bootstrap toast
function showToast(message) {
    const toastContainer = document.createElement('div');
    toastContainer.innerHTML = `
        <div class="toast align-items-center text-white bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                    ${message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    `;
    document.body.appendChild(toastContainer);

    const toast = new bootstrap.Toast(toastContainer.querySelector('.toast'));
    toast.show();

    // Remove the toast after it hides
    toastContainer.addEventListener('hidden.bs.toast', () => {
        toastContainer.remove();
    });
}

// Attach event listener to the form
document.getElementById('report-form').addEventListener('submit', handleFormSubmit);