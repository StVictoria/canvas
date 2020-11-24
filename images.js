window.onload = function () {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("planet");
  ctx.drawImage(img, 10, 10);
};
