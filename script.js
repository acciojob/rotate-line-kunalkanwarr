//your JS code here. If required.
// Get the line element by its ID
const line = document.getElementById('line');

// Initial angle for rotation
let angle = 0;

// Function to update the rotation angle
function rotateLine() {
    angle += 2; // Increase the angle by 2 degrees
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`; // Apply the rotation
}

// Set an interval to update the rotation every 20 milliseconds
setInterval(rotateLine, 20);
