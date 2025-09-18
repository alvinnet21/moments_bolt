function showDetails(title, price, details) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-price').innerText = price;
    document.getElementById('modal-details').innerText = details;

    const modal = document.getElementById('modal');
    modal.style.display = "block"; // Set display to block
    setTimeout(() => {
        modal.classList.add("show"); // Add the show class for fade-in effect
    }, 10); // Small timeout to ensure it transitions correctly
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove("show"); // Remove the show class for fade-out effect

    // Wait for the transition to finish before hiding it completely
    setTimeout(() => {
        modal.style.display = "none"; // Hide the modal completely after fade-out
    }, 500); // Match this duration with the CSS transition duration
}


// Add click event listener to close modal when clicking outside of it
document.getElementById('modal').addEventListener('click', function(event) {
    if (event.target === this) { // Check if the click is on the modal background
        closeModal();
    }
});