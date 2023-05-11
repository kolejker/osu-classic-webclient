const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const stars = [];
const starImage = new Image();
starImage.src = '/star.png';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Star {
  constructor(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.angle = Math.random() * 360;
  }

  update() {
    this.angle += this.speed;
    this.size += 0.1;
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle * Math.PI / 180);
    ctx.drawImage(starImage, -this.size / 2, -this.size / 2, this.size, this.size);
    ctx.restore();
  }
}

function spawnStar() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const size = 1;
  const speed = Math.random() * 2 + 0.5;
  const star = new Star(x, y, size, speed);
  stars.push(star);
}

function update() {
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    if (stars[i].size > 50) {
      stars.splice(i, 1);
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < stars.length; i++) {
    stars[i].draw();
  }
}

function loop() {
  spawnStar();
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();