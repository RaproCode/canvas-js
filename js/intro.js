// get <canvas></canvas>
var canvas = document.querySelector(".my-game");

// jQuery style
//  var canvas = $('.my-game')[0];

// get the context object to draw things
var ctx = canvas.getContext("2d");

// set the color of fills first
ctx.fillStyle = "deeppink";

// draw rectangle x, y, height, can control fill color
ctx.fillRect(0, 0, 1000, 550);

// change it
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 500, 275);


ctx.strokeStyle = "yellow";
ctx.lineWidth = 10;

// draw a rectangle outline, can control line width
ctx.strokeRect(500, 275, 500, 275);

// order matters, last thing go on top