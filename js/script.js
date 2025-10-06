// Function to update button text based on screen width
function updateButtonText() {
  const submitBtn = document.getElementById('submit-btn');
  if (submitBtn) {
    if (window.innerWidth < 500) {
      submitBtn.value = 'Get FREE Course';
    } else {
      submitBtn.value = 'Get FREE 21-Day M&A Course';
    }
  }
}

// Function to set current year in footer
function setCurrentYear() {
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
}

// Update button text on page load
document.addEventListener('DOMContentLoaded', function () {
  updateButtonText();
  setCurrentYear();
});

// Update button text when window is resized
window.addEventListener('resize', updateButtonText);
