/**
* Flappy Bird Game
* This script sets up and controls a Flappy Bird-style game.
* It handles canvas drawing, bird physics, obstacle management, scoring, and game reset.
*/
 
// Canvas setup
const canvas = document.getElementById('flappyBirdCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 27;
canvas.height = window.innerHeight - 27;
 
// Bird properties
const bird = {
    x: 50,
    y: 150,
    radius: 20,
    color: 'yellow',
    speed: 0,
    gravity: 0.25,
    jump: 4.5
};
 
// Obstacle properties
const obstacles = [];
const obstacleWidth = 50;
const obstacleGap = 150;
const obstacleInterval = 2000;
 
// Game state variables
let score = 0;
let scoreUpdated = false;
let isGameOver = false;
 
/**
* Draws the bird on the canvas.
*/
function drawBird() {
    ctx.fillStyle = bird.color;
    ctx.beginPath();
    ctx.arc(bird.x, bird.y, bird.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
 
    // Bird eyes
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(bird.x + 10, bird.y - 10, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(bird.x + 20, bird.y - 10, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
 
    // Bird beak
    ctx.fillStyle = 'orange';
    ctx.beginPath();
    ctx.moveTo(bird.x + 20, bird.y - 10);
    ctx.lineTo(bird.x + 30, bird.y - 10);
    ctx.lineTo(bird.x + 20, bird.y);
    ctx.fill();
}
 
/**
* Updates the bird's position based on gravity and speed.
*/
function updateBird() {
    bird.speed += bird.gravity;
    bird.y += bird.speed;
 
    if (bird.y + bird.radius > canvas.height || bird.y - bird.radius < 0) {
        bird.speed = 0;
    }
}
 
/**
* Draws obstacles (pipes) on the canvas.
*/
function drawObstacles() {
    obstacles.forEach(obstacle => {
        ctx.fillStyle = 'green';
        ctx.fillRect(obstacle.x, 0, obstacleWidth, obstacle.top);
        ctx.fillRect(obstacle.x, canvas.height - obstacle.bottom, obstacleWidth, obstacle.bottom);
    });
}
 
/**
* Updates obstacles, creating new ones and removing old ones.
*/
function updateObstacles() {
    if (obstacles.length === 0 || obstacles[obstacles.length - 1].x < canvas.width - obstacleInterval) {
        let top = Math.floor(Math.random() * (canvas.height - obstacleGap));
        let bottom = canvas.height - top - obstacleGap;
        obstacles.push({x: canvas.width, top, bottom});
    }
    
    obstacles.forEach(obstacle => obstacle.x -= 2);
 
    if (obstacles.length > 0 && obstacles[0].x < -obstacleWidth) {
        obstacles.shift();
    }
}
 
/**
* Draws the current score on the canvas.
*/
function drawScore() {
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Score: ' + score, 20, 30);
}
 
/**
* Updates the score when the bird passes an obstacle.
*/
function updateScore() {
    obstacles.forEach(obstacle => {
        if (!scoreUpdated && bird.x > obstacle.x + obstacleWidth) {
            score++;
            scoreUpdated = true;
        }
        if (bird.x < obstacle.x + obstacleWidth) {
            scoreUpdated = false;
        }
    });
}
 
/**
* Checks for collisions between the bird and obstacles.
*/
function checkCollision() {
    obstacles.forEach(obstacle => {
        if (bird.x + bird.radius > obstacle.x && bird.x - bird.radius < obstacle.x + obstacleWidth &&
            (bird.y - bird.radius < obstacle.top || bird.y + bird.radius > canvas.height - obstacle.bottom)) {
            isGameOver = true;
        }
    });
 
    if (bird.y + bird.radius >= canvas.height) {
        isGameOver = true;
    }
}
 
/**
* Draws the start over button on the canvas.
* The button is only drawn when the game is over.
* The button is a rectangle with text inside.
* The button is centered horizontally and vertically.
* The button is gray with a black border.
* The text is black.
* The button is 200px wide and 50px tall.
* The text is 40px Arial.
* The text is centered horizontally and vertically.
* The text says "Start Over".
* The button is clickable.
* When the button is clicked, the game is reset.
*/
function drawStartOverButton() {
    ctx.fillStyle = 'gray';
    ctx.fillRect(canvas.width / 2 - 100, canvas.height / 2 - 25, 200, 50);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(canvas.width / 2 - 100, canvas.height / 2 - 25, 200, 50);
    ctx.font = '40px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Start Over', canvas.width / 2 - 100, canvas.height / 2 + 10);
}
 
/**
* Resets the game.
* The bird is reset to its starting position.
* The obstacles are reset to an empty array.
* The score is reset to 0.
* The game over flag is reset to false.
* The canvas is cleared.
* The game loop is restarted.
* The start over button is removed.
  */
function resetGame() {
    bird.y = 150;
    obstacles.length = 0;
    score = 0;
    isGameOver = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    update();
}
 
// Jump and reset game
document.addEventListener('keydown', function (event) {
  if (event.code === 'Space') {
      if (isGameOver) {
          resetGame();
      } else {
          bird.speed = -bird.jump;
      }
  }
});
 
canvas.addEventListener('click', function(event) {
  if (isGameOver) {
      resetGame();
  } else {
      bird.speed = -bird.jump;
  }
});
 
// Game loop
function update() {
    if (isGameOver) {
        drawStartOverButton();
        return;
    }
 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateBird();
    drawBird();
    updateObstacles();
    drawObstacles();
    checkCollision();
    updateScore();
    drawScore();
    requestAnimationFrame(update); // Call update repeatedly
}
 
update(); // Start the game loop