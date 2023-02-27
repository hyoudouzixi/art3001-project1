var leftRec = document.getElementsByClassName('flash-rectangle-left');
var rightRec = document.getElementsByClassName('flash-rectangle-right');
var horizontalRec = document.getElementsByClassName('flash-rectangle-horizontal');

// get window width and height
var winHeight = window.innerHeight;
var winWidth = window.innerWidth;

for ( var i=0; i < leftRec.length; i++ ) {
 	
    var thisLeftRec = leftRec[i];
    
    // get random numbers for each element
    randomTop = getRandomNumber(80, winHeight);
    randomLeft = getRandomNumber(0, 100);
    random = getRandomNumber(0,4);
    
    // update top and left position
    thisLeftRec.style.top = randomTop +"px";
    thisLeftRec.style.left = randomLeft +"px";

    thisLeftRec.style.animation = "flash " + random + "s" + " infinite";
    
}

for ( var i=0; i < rightRec.length; i++ ) {
 	
    var thisRightRec = rightRec[i];
    
    // get random numbers for each element
    randomTop = getRandomNumber(80, winHeight);
    randomRight = getRandomNumber(0, 100);
    random = getRandomNumber(0,4);
    
    // update top and right position
    thisRightRec.style.top = randomTop +"px";
    thisRightRec.style.right = randomRight +"px";

    thisRightRec.style.animation = "flash " + random + "s" + " infinite";
    
}

for ( var i=0; i < horizontalRec.length; i++ ) {
 	
  var thisHorizontalRec = horizontalRec[i];
  
  // get random numbers for each element
  randomTop = getRandomNumber(80, winHeight);
  randomLeft = getRandomNumber(100, 200);
  randomRight = getRandomNumber(100, 200);
  randomWidth = getRandomNumber(100, winWidth/2);
  random = getRandomNumber(0,0.2);
  
  // update top and right position
  thisHorizontalRec.style.top = randomTop +"px";
  thisHorizontalRec.style.left = randomLeft +"px";
  thisHorizontalRec.style.right = randomRight +"px";
  thisHorizontalRec.style.width = randomWidth + "px";

  thisHorizontalRec.style.animation = "flash " + random + "s" + " infinite";
  
}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {
    
  return Math.random() * (max - min) + min;
    
}



document.addEventListener("mousedown", rotateCube);

function rotateCube(e) {
  
  var cube = document.getElementsByClassName("cube");
  var x = e.clientX - window.innerWidth / 2;
  var y = e.clientY - window.innerHeight / 2;
  var q = 0.15;
  var i;

  x = x * q * 2.25;
  y = -y * q * 2.25;
  
  for(i = 0; i < cube.length; i++) {
    cube[i].style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
  }

}

const displayTime = document.querySelector(".time");
// Time
function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
  setTimeout(showTime, 1000);
}

showTime();

