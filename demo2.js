let enemies = []; // array of Jitter objects
let numOfEnemies = 1;
function setup() {
  createCanvas(710, 400);
  // Create objects
  while (numOfEnemies < 110) {
    enemies.push(new Enemy());
    numOfEnemies++;
  }
}

function draw() {
  background(50, 89, 100);
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].move();
    enemies[i].display();
  }
}

// Jitter class
class Enemy {
    constructor() {
      this.x = random(width / 5, width - 100);
      this.y = random(-800, 0);
    }
  
    move() {
      this.y += 1;
    }
  
    display() {
      rect(this.x, this.y, 10);;
    }
  }

