const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');

let width, height;
let charWidth = 10;
let charHeight = 18;
const chars = ['.', ',', '~', '-', '+', '*', '=', '^', '`', "'", ':'];

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
            const noise = Math.sin(x * 0.05 + time) + Math.sin(y * 0.05 + time);
            if (Math.random() > 0.5 + noise * 0.1) {
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
