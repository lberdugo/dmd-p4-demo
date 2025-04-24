//adding images

var img; //variable is declared, but not initalized!
var static;

function preload(){
  img = loadImage("computer.png");
  static = loadImage("static.jpg");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  imageMode(CORNER);
  image(static, 0, 0);
  
  imageMode(CENTER); // draws from the center
  //image(img, 0, 0);
  image(img, mouseX, mouseY);
  
}