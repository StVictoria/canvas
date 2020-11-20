const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 500;

// function sound(src) {
//   this.sound = document.createElement("audio");
//   this.sound.src = src;
//   this.sound.setAttribute("preload", "auto");
//   this.sound.setAttribute("controls", "none");
//   this.sound.style.display = "none";
//   document.body.appendChild(this.sound);
//   this.play = function () {
//     this.sound.play();
//   };
//   this.stop = function () {
//     this.sound.pause;
//   };
// }
// let mySound = new sound("/caughtball.mp3");

const ballsArray = [];

class Ball {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.weight = 0.1;
    this.gravitySpeed = 0; //velocity (vy)
    this.dx = 0.3;
    // this.leftDirection = false;
    this.angle = 2;
    this.bounceY = 0.9;
    this.bounceX = 0.2;
    this.hue = Math.random() * 360;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = "hsl(" + this.hue + ", 100%, 70%)";
    ctx.strokeStyle = "black";
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  update() {
    this.gravitySpeed += this.weight;
    this.y += this.gravitySpeed;

    this.x += this.angle * this.dx;

    const bottom = canvas.height - this.radius;

    if (this.y > bottom) {
      this.y = bottom;
      this.gravitySpeed = -(this.gravitySpeed * this.bounceY);
    }

    if (this.x > canvas.width - this.radius || this.x < 0 + this.radius) {
      this.dx = -this.dx;
    }
    console.log(this.gravitySpeed);
  }
}

for (let i = 0; i < 1; i++) {
  ballsArray.push(
    new Ball(Math.random() * canvas.width, Math.random() * canvas.height, 10)
  );
}

console.log(ballsArray);

function animation() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < ballsArray.length; i++) {
    ballsArray[i].draw();
    ballsArray[i].update();
  }

  requestAnimationFrame(animation);
}

animation();
