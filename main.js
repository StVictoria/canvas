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
    this.bounce = 0.7;
    this.hue = Math.random() * 360;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = "hsl(" + this.hue + ", 100%, 70%)";
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  falling() {
    this.gravitySpeed += this.weight;
    this.y += this.gravitySpeed;
    this.hitBottom();
  }
  hitBottom() {
    const bottom = canvas.height - this.radius;
    if (this.y > bottom) {
      this.y = bottom;
      this.gravitySpeed = -(this.gravitySpeed * this.bounce);
    }
  }
}

for (let i = 0; i < 20; i++) {
  ballsArray.push(
    new Ball(Math.random() * canvas.width, Math.random() * canvas.height, 10)
  );
}

console.log(ballsArray);

function animation() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < ballsArray.length; i++) {
    ballsArray[i].draw();
    ballsArray[i].falling();
  }

  requestAnimationFrame(animation);
}

animation();
