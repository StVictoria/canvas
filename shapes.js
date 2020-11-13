const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

//rectangle
ctx.fillRect(200, 175, 150, 75); // (x, y, width, height)
ctx.fillStyle = " #00FF00"; // default - black

// //line
ctx.moveTo(240, 250);
ctx.lineTo(240, 280);
ctx.stroke();

ctx.moveTo(300, 250);
ctx.lineTo(300, 280);
ctx.stroke();

//circle
ctx.beginPath();
ctx.arc(275, 150, 25, 0, 2 * Math.PI); //(x, y, r, startangle, endangle)
ctx.stroke();

//gradient
// createLinearGradient(x,y,x1,y1) - creates a linear gradient
// createRadialGradient(x,y,r,x1,y1,r1) - creates a radial/circular gradient

var grd = ctx.createLinearGradient(0, 0, 200, 0); //берём градиент из контекста и прописываем координаты
grd.addColorStop(0, "red"); //добавляем точки останова
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd; //наполняем контекст созданным градиентом
ctx.fillRect(10, 10, 150, 80); //создаём фигуру, которую заполнит градиент

var grd_2 = ctx.createRadialGradient(1050, 125, 5, 1050, 125, 60);
grd_2.addColorStop(0, "white");
grd_2.addColorStop(1, "orange");

// Fill with gradient
ctx.fillStyle = grd_2;
ctx.fillRect(1000, 100, 100, 50);
