let buttonPlay;
let buttonPause;
var song;
var fft;
let bullets = [];
let enemies = [];
let angle = 0;
let score = 0;

function preload() {
    song = loadSound('STUDY WITH MIKU.mp3')
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    fft = new p5.FFT();

    buttonPlay = createButton('Play Song');
    buttonPlay.position(20, height - 100);
    buttonPlay.mousePressed(playSong);
    buttonPlay = createButton('Pause Song');
    buttonPlay.position(width / 5, height - 100);
    buttonPlay.mousePressed(pauseSong);

    for (let i = 0; i < 20; i++) {
        let enemy = {
            x: random(width / 5, width - 100),
            y: random(-800, 0)
        }
        enemies.push(enemy);
    }
}

function draw() {
    background(0);
    rectMode(CENTER);
    stroke(255);
    noFill();

    var wave = fft.waveform();

    beginShape();
    for (var i = 0; i < width; i++) {
        var index = floor(map(i, 0, width, 0, wave.length));

        var x = i / 5 + 50;
        var y = wave[index] * 100 +  4 * height / 5;
        vertex(x, y);
    }
    endShape();

    circle(mouseX, mouseY, 50);
    for (let bullet of bullets) {
        bullet.y -= 10;
        rect(bullet.x, bullet.y, 8, 20);
    }

    for (let enemy of enemies) {
        enemy.y += 2;
        rect(enemy.x, enemy.y, 10);
    }

    for (let enemy of enemies) {
        for (let bullet of bullets) {
            if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 10) {
                enemies.splice(enemies.indexOf(enemy), 1);
                bullets.splice(bullets.indexOf(bullet), 1);
                let newEnemy = {
                    x: random(width / 5, width - 100),
                    y: random(-800, 0)
                }
                enemies.push(newEnemy);
                score += 1;
            }
        }
    }

    text(score, width - 80, 50);

    for (let a = 0; a < radians(360); a += radians(30)) {
        push();
        translate(mouseX, mouseY);
        rotate(a);
        translate(0, 100);
        rotate(-angle);
        rectMode(CENTER);
        square(0, 0, 25);
        pop();
    }

    angle += radians(1);

} 

function playSong() {
    song.play();
}

function pauseSong() {
    song.pause();
}

function mousePressed() {
    let bullet = {
        x: mouseX,
        y: mouseY
    }
    bullets.push(bullet);
}

