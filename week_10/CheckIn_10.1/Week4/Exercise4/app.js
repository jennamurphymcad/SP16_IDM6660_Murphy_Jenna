var xoff = 0.0;
var time = setInterval(function(){ myTimer() }, 25);

function setup() {
  createCanvas(600, 350);
  noiseSeed(99);
  stroke(0, 100);
}

function myTimer() {
  xoff = xoff + 0.5;
    var n = noise(xoff) * width;
    line(n, 0, n, height);
}

function myStopFunction() {
    clearInterval(time);
}
