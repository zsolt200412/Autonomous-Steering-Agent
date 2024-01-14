let vehicle = [];
let target;
let cat;
let ball;
let bg;

function setup() {
  let canvas = createCanvas(800, 800);
  canvas.position(10, 80);
  for(let i=0;i<1;i++)
  {
    vehicle[i] = new Vehicle(100, i*50);
  }
  cat = loadImage("cat.png");
  ball = loadImage("ball.png");
  bg = loadImage("floor.png");
}

function draw() {
  background(bg);
  fill(255, 0, 0);
  noStroke();
  target = createVector(mouseX, mouseY);
  image(ball, target.x-25, target.y - 25, 50, 50);
  for(let i=0;i<1;i++)
  {
    vehicle[i].seek(target);
    vehicle[i].update();
    vehicle[i].show();
  }
}
