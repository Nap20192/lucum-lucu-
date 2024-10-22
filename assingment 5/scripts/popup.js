// Get elements
const openPopupBtn = document.getElementById('openPopupBtn');
const popupForm = document.getElementById('popupForm');
const closePopupBtn = document.getElementById('closePopupBtn');

// Open the popup when button is clicked
openPopupBtn.addEventListener('click', function() {
    popupForm.style.display = 'block';
});

// Close the popup when the 'X' is clicked
closePopupBtn.addEventListener('click', function() {
    popupForm.style.display = 'none';
});

// Close the popup if the user clicks outside the form content
window.addEventListener('click', function(event) {
    if (event.target === popupForm) {
        popupForm.style.display = 'none';
    }
});
