function setup() {
    createCanvas(300, 300);
  }
  
  function draw() {
    background(100);
    
    for (let i = 0; i < 10; i++) {
      drawCircle(i * 20);
    }
  }

  function drawCircle(x) {
    circle(x, 75, 50);
  }