const canvas = document.getElementById("canvas");
canvas.style.border = "2px solid black";
const ctx = canvas.getContext("2d");

const startScreen = document.querySelector(".game-intro");


const roadBackground = new Image();
roadBackground.src = "/images/road.png";
//found another way to draw the road...
/*roadBackground.onload = () => {
  ctx.drawImage(roadBackground, 0, 0, canvas.width, canvas.height)
}*/


const blueCar = new Image();
blueCar.src = "/images/car.png";
//found another way to draw the car...
/*blueCar.onload = () => {
  ctx.drawImage(blueCar, 223, 570, blueCarWidth, blueCarHeight)
}*/

//blueCar moving from left to right

const blueCarWidth = 50;
const blueCarHeight = 100;
let blueCarSpeed = 2;

let carMovesRight = false;
let carMovesLeft = false;

let blueCarX = canvas.width / 2 - carMovesLeft.width / 2;

let animateId;
let gameOver = false;

const drawRoad = () => {
  ctx.beginPath();
  ctx.drawImage(roadBackground, 0, 0, canvas.width, canvas.height);
  ctx.closePath();
}

const drawBlueCar = () => {
  ctx.beginPath();
  ctx.drawImage(blueCar, 223, 570, blueCarWidth, blueCarHeight);
  ctx.closePath();
}

const animateBlueCar = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(blueCar, 0, 0, canvas.width, canvas.height);
  drawRoad();
  drawBlueCar();

  if (carMovesLeft && blueCarX > 0) {
    blueCarX -= blueCarSpeed;
  } else if (carMovesRight && blueCarX < blueCarWidth - blueCar.width) {
    blueCarX += blueCarSpeed;
  }

  if (gameOver) {
    cancelAnimationFrame(animateId);
  } else {
    animateId = requestAnimationFrame(animateBlueCar);
  }
}


window.onload = () => {
  canvas.style.display = "none";

  document.getElementById("start-button").onclick = () => {
    startGame();

  };

  function startGame() {
    console.log("Let's GO!");
    canvas.style.display = "block";
    startScreen.style.display = "none";

    drawRoad();
    drawBlueCar();

    animateBlueCar();
    }

  document.addEventListener("keydown", (event) => {
      console.log(event);
      if (event.code === "ArrowRight") {
        carMovesRight = true;
      }
      if (event.code === "ArrowLeft") {
        carMovesLeft = true;
      }
    });
    
  document.addEventListener("keyup", event => {
        carMovesRight = false;
        carMovesLeft = false;
      });

  }




  /*document.onkeydown = (e) => {
  e = e || window.event;
  if (e.keyCode === 38) {
    console.log('up arrow pressed')
  } else if (e.keyCode === 40) {
    console.log('down arrow pressed')
  } else if (e.keyCode === 37) {
    console.log('left arrow pressed')
  } else if (e.keyCode === 39) {
    console.log('right arrow pressed')
  }
}*/





