// Static background image for the section
const staticBackgroundImage = 'im4.jpg'; // Replace with your actual image path

// Function to set the static background image
function setStaticBackground() {
    const backgroundSection = document.getElementById('background-section');
    // Ensure the section exists before applying changes
    if (backgroundSection) {
        backgroundSection.style.backgroundImage = `url('${staticBackgroundImage}')`;
    } else {
        console.warn('Background section not found.');
    }
}

// Set the static background image on page load
setStaticBackground();

// Disable right-click on the entire page
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    alert("Right-click is disabled on this webpage for safety reasons.");
});
