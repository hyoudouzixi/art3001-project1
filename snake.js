// Set up the canvas and initialize the game
function setup() {
    createCanvas(400, 400);
    frameRate(10);
    snake = new Snake();
    food = new Food();
  }
  
  // Draw the game board and update the game state
  function draw() {
    background(220);
    snake.move();
    snake.show();
    food.show();
    if (snake.eat(food)) {
      food = new Food();
    }
    if (snake.gameOver()) {
      textSize(32);
      textAlign(CENTER, CENTER);
      text("Game Over!", width / 2, height / 2);
      noLoop();
    }
  }
  
  // Handle keyboard input to control the snake
  function keyPressed() {
    if (keyCode === UP_ARROW) {
      snake.setDirection(0, -1);
    } else if (keyCode === DOWN_ARROW) {
      snake.setDirection(0, 1);
    } else if (keyCode === LEFT_ARROW) {
      snake.setDirection(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
      snake.setDirection(1, 0);
    }
  }
  
  // Define the Snake class
  class Snake {
    constructor() {
      this.segments = [createVector(0, 0)];
      this.direction = createVector(1, 0);
    }
    
    setDirection(x, y) {
      this.direction.set(x, y);
    }
    
    move() {
      let head = this.segments[this.segments.length - 1].copy();
      head.add(this.direction);
      this.segments.push(head);
      this.segments.shift();
    }
    
    show() {
      for (let segment of this.segments) {
        fill(0);
        rect(segment.x * 20, segment.y * 20, 20, 20);
      }
    }
    
    eat(food) {
      let head = this.segments[this.segments.length - 1];
      if (head.x === food.position.x && head.y === food.position.y) {
        this.segments.push(this.segments[this.segments.length - 1].copy());
        return true;
      }
      return false;
    }
    
    gameOver() {
      let head = this.segments[this.segments.length - 1];
      if (head.x < 0 || head.x >= width / 20 || head.y < 0 || head.y >= height / 20) {
        return true;
      }
      for (let i = 0; i < this.segments.length - 1; i++) {
        if (head.equals(this.segments[i])) {
          return true;
        }
      }
      return false;
    }
  }
  
  // Define the Food class
  class Food {
    constructor() {
      this.position = createVector(floor(random(width / 20)), floor(random(height / 20)));
    }
    
    show() {
      fill(255, 0, 0);
      rect(this.position.x * 20, this.position.y * 20, 20, 20);
    }
  }