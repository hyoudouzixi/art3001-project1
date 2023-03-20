let x = 0;
let y = 0;
let clr;
let circleX = 100;
let circleY = 0;
let xSpeed = 5;
let ySpeed = 5;
let circleSize = 20;
let circleSpeedX = 5;
let circleSpeedY = 5;
let value = 0;
let size = 200;
let sqrX = 200;
let sqrY = 200;
let sqrXSpeed = 4;
let sqrYSpeed = 4;


function setup() {
  myCanvas = createCanvas(1500, 700);
  clr = color(0, 0, 0);
  noStroke();
}

function draw() {
  background(150);

  push();
  fill(0, 102, 153);
  textSize(50);
  text('click anywhere to play with it', 10, 60);
  pop();

  push();
  fill(100, 100, 100);
  triangle(300, 750, 580, 200, 860, 750);
  pop();

  push();
  fill(value);
  square(sqrX, sqrY, size);
  sqrX = sqrX + sqrXSpeed;
  sqrY = sqrY + sqrYSpeed;
  pop();

  push();
  fill(clr);
  translate(0, 0);
  beginShape();
  vertex(x, 0);
  vertex(x + 10, 0); 
  vertex(x + 20, 20); 
  vertex(x + 10, 40); 
  vertex(x, 40); 
  vertex(x + 10, 20); 
  endShape(CLOSE);

  translate(0, 0);
  beginShape();
  vertex(x + 20, 0);
  vertex(x + 30, 0); 
  vertex(x + 40, 20); 
  vertex(x + 30, 40); 
  vertex(x + 20, 40); 
  vertex(x + 30, 20); 
  endShape(CLOSE);

  x = x + 5;
  y += 5;
  if (x > width) {
    x = 0;
  }
  if (y > 255) {
    y = 0;
  }
  
  clr = color(0, y, y);
  pop();


  circle(circleX, circleY, 50);

  // modify state
  circleX = circleX + xSpeed;
  circleY = circleY + ySpeed;

  //bounce off left
  if(circleX < 0) {
    xSpeed = xSpeed * -1;
    fill(255, 0, 0);
  }
  
    //bounce off right
  if(circleX > width) {
    xSpeed = xSpeed * -1;
    fill(255, 255, 0);
  }

  // bounce off top
  if(circleY < 0) {
    ySpeed = ySpeed * -1;
    fill(0, 255, 255);
  }

    // bounce off bottom
  if(circleY > height) {
    ySpeed = ySpeed * -1;
    fill(0, 0, 255);
  }

  if(sqrX < 0) {
    sqrXSpeed = sqrXSpeed * -1;
  }
  
    //bounce off right
  if(sqrX > width) {
    sqrXSpeed = sqrXSpeed * -1;
  }

  // bounce off top
  if(sqrY < 0) {
    sqrYSpeed = sqrYSpeed * -1;
  }

    // bounce off bottom
  if(sqrY > height) {
    sqrYSpeed = sqrYSpeed * -1;
  }

  if(sqrXSpeed > 7|| sqrYSpeed > 7) {
    sqrXSpeed = 4;
    sqrYSpeed = 4;
  }
}

function mouseClicked() {
  if (value === 0 || size === 200) {
    value = 255;
    size = 300;
    sqrXSpeed = sqrXSpeed * random(-1, -1.5);
    sqrYSpeed = sqrYSpeed * random(-1, -1.5);
  } else {
    value = 0;
    size = 200;
    sqrXSpeed = sqrXSpeed * random(-1, -1.5);
    sqrYSpeed = sqrYSpeed * random(-1, -1,5);
  }
}

