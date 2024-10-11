const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');

let width, height;
let charWidth = 10;
let charHeight = 18;
const chars = ['.', ',', '~', '-', '+', '*', '=', '^', '`', "'"];

function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}

function randomChar() {
    return chars[Math.floor(Math.random() * chars.length)];
}

function drawWave() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#444';
    ctx.font = `${charHeight}px monospace`;

    const time = Date.now() * 0.002;

    for (let y = 0; y < height; y += charHeight) {
        for (let x = 0; x < width; x += charWidth) {
            // Generate a noise-like effect for random placement
            const noise = Math.sin(x * 0.02 + time) * Math.cos(y * 0.02 + time);

            // Random threshold to create organic, sparse waves
            if (Math.random() > 0.8 + noise * 0.2) {
                ctx.fillText(randomChar(), x, y);
            }
        }
    }

    requestAnimationFrame(drawWave);
}

window.addEventListener('resize', () => {
    resizeCanvas();
});

resizeCanvas();
drawWave();
