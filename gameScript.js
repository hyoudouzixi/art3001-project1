const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

//create a canvas 
canvas.width = 64 * 16;
canvas.height = 64 * 9; 



const player = new Player();

// default with wsd not pressed
const keys = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
}

function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);

    // determine which key is pressed and if key d pressed, move right, if key a pressed, move left
    player.velocity.x = 0;
    if (keys.d.pressed) {
        player.velocity.x = 5;
    } else if (keys.a.pressed) {
        player.velocity.x = -5;
    }

    player.draw();
    player.update();
    
}

animate()

