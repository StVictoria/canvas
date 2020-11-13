// font - defines the font properties for the text
// fillText(text,x,y) - draws "filled" text on the canvas
// strokeText(text,x,y) - draws text on the canvas (no fill)
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

context.font = "30px Arial";
context.fillText("It's my first canvas text", 100, 100);

//strokeText() - Sets font to 30px "Arial" and write a text, with no fill, on the canvas
context.strokeText("Stroke Text", 100, 200);

context.font = "30px Comic Sans MS";
context.fillStyle = "green";
context.textAlign = "center";
context.fillText("Green Centred Text", canvas.width / 2, 300);
