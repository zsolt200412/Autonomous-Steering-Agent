let vehicle = [];
let target;

function setup() {
  let canvas = createCanvas(800, 800);
  canvas.position(10, 80);
  for(let i=0;i<1;i++)
  {
    vehicle[i] = new Vehicle(100, i*50);
  }
}

function draw() {
  background(0);
  fill(255, 0, 0);
  noStroke();
  target = createVector(mouseX, mouseY);
  circle(target.x, target.y, 16);
  for(let i=0;i<1;i++)
  {
    vehicle[i].seek(target);
    vehicle[i].update();
    vehicle[i].show();
  }
}
