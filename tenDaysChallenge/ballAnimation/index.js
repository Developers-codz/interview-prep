const ball = document.getElementById('ball');
const container = document.querySelector('.container');

let position = 0;
let direction = 1;
const speed = 2;

function moveBall() {
    const containerWidth = container.offsetWidth;
    const ballWidth = ball.offsetWidth;
    const maxPosition = containerWidth - ballWidth;
    
    // Update position
    position += speed * direction;
    
    // Reverse direction at boundaries
    if (position >= maxPosition || position <= 0) {
        direction *= -1; // Flip direction
    }
    
    // Clamp position to boundaries
    position = Math.max(0, Math.min(position, maxPosition));
    
    // Apply position
    ball.style.left = position + 'px';
    
    // Continue animation
    requestAnimationFrame(moveBall);
}

// Start animation
requestAnimationFrame(moveBall);