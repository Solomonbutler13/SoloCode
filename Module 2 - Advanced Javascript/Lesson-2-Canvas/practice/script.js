// Get the canvas element
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set canvas width and height to fit the browser window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Function to draw the dynamic background
function drawDynamicBackground() {
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'rgb(30, 30, 30)');
    gradient.addColorStop(1, 'rgb(60, 60, 60)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Store shapes' positions
let shapes = [
    { x: 100, y: 100, type: 'circle' },
    { x: 300, y: 200, type: 'pentagon' },
    // Add more shapes if needed
];

// Function to draw all shapes on the canvas
function drawAllShapes() {
    shapes.forEach(shape => {
        drawShapeWithShadow(shape.x, shape.y, shape.type);
    });
}

// Event listener for arrow key presses
document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowUp':
            shapes.forEach(shape => (shape.y -= 10));
            break;
        case 'ArrowDown':
            shapes.forEach(shape => (shape.y += 10));
            break;
        case 'ArrowLeft':
            shapes.forEach(shape => (shape.x -= 10));
            break;
        case 'ArrowRight':
            shapes.forEach(shape => (shape.x += 10));
            break;
    }

    // Redraw all shapes after the position update
    updateCanvas();
});

// Event listener for double-click
canvas.addEventListener('dblclick', function(event) {
    const particles = [];

    // Create particles at the click point
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: event.clientX,
            y: event.clientY,
            size: Math.random() * 5 + 2, // Random size between 2 and 7
            speedX: (Math.random() - 0.5) * 3, // Random horizontal speed
            speedY: (Math.random() - 0.5) * 3, // Random vertical speed
            color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.8)`, // Random color with some transparency
        });
    }

    // Function to animate particles
    function animateParticles() {
        particles.forEach(particle => {
            // Move particle
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            // Reduce size and transparency for fading effect
            particle.size -= 0.1;
            particle.color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${particle.size / 5})`;
        });

        // Remove faded particles
        particles.splice(particles.findIndex(particle => particle.size <= 0), 1);

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw particles
        particles.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            ctx.closePath();
        });

        // Request animation frame for smooth animation
        if (particles.length > 0) {
            requestAnimationFrame(animateParticles);
        }
    }

    // Call the function to start particle animation
    animateParticles();
});

// Function to draw a shape with shadow
function drawShapeWithShadow(x, y, shapeType) {
    // Set shadow properties
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;

    // Draw the shape
    if (shapeType === 'circle') {
        ctx.beginPath();
        ctx.arc(x, y, 30, 0, Math.PI * 2);
        ctx.fillStyle = 'rgb(0, 255, 0)';
        ctx.fill();
        ctx.closePath();
    } else if (shapeType === 'pentagon') {
        const sideLength = 40;
        ctx.beginPath();
        ctx.moveTo(x + sideLength * Math.cos(0), y + sideLength * Math.sin(0));
        for (let i = 1; i <= 5; i++) {
            ctx.lineTo(x + sideLength * Math.cos(i * (Math.PI * 2) / 5), y + sideLength * Math.sin(i * (Math.PI * 2) / 5));
        }
        ctx.fillStyle = 'rgb(0, 255, 0)';
        ctx.fill();
        ctx.closePath();
    }

    // Reset shadow properties
    ctx.shadowColor = 'rgba(0, 0, 0, 0)';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
}

// Function to update and redraw the entire canvas
function updateCanvas() {
    drawDynamicBackground();
    drawAllShapes();
}

// Call the function to draw the initial dynamic background
drawDynamicBackground();
