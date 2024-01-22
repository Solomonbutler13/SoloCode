// Get the canvas element
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set canvas width and height to fit the browser window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Function to draw a simple circle at a random position with a random color
function drawRandomCircle() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = 30;
    const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

    // Draw the circle
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

// Event listener for mouse clicks to draw a circle at the click position
canvas.addEventListener('click', drawRandomCircle);

// Function to clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Event listener for keyboard presses to clear the canvas
document.addEventListener('keydown', function(event) {
    if (event.key === 'c') {
        clearCanvas();
    }
});