var osc, canvas, fft, waveform, slider, slider2;
var playing = false;

function setup() {
  canvas = createCanvas(300, 300)
  // sine wave
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.amp(.3);
  osc.start();
  fft = new p5.FFT();
  slider = createSlider(0, 500, 130);
  slider.position(10, 400);
  // triangle wave
  osc2 = new p5.Oscillator();
  osc2.setType('triangle');
  osc.amp(.2);
  osc2.start();
  fft2 = new p5.FFT();
  slider2 = createSlider(0, 500, 10);
  slider2.position(175, 400);
}

function draw() {
  // sine waveform
  var waveform = fft.waveform();
  background(255);
  noFill();
  beginShape();
  for (var i = 0; i< waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();
  // sine slider
  var r = slider.value();
  osc.freq(r);
  // triangle waveform
  var waveform2 = fft2.waveform();
  background(255);
  noFill();
  strokeWeight(7);
  stroke(243,99,98);
  beginShape();
  for (var i = 0; i< waveform2.length; i++){
    var x = map(i, 0, waveform2.length, 0, width);
    var y = map( waveform2[i], -1, 1, 0, height);
    vertex(x+2, y+2);
  }
  endShape();
  // triangle slider
  var b = slider2.value();
  osc2.freq(b);
}
