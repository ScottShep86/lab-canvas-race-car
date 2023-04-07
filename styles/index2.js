window.onload = () => {
    const startScreem = document.querySelector(".game-intro");
    const canvas = document.querySelector("#canvas");
    // hide the canvas until start the game
    canvas.style.display = "none";
  
    const ctx = canvas.getContext("2d");
  
    const bgImg = new Image();
    bgImg.src = "../images/road.png";
  
    const car = new Image();
    car.src = "../images/car.png";
  
    // car moving left/rigth
    let isMovingRigth = false;
    let isMovingLeft = false;
  
    const carWidth = 50;
    const carHeight = 100;
    let carSpeed = 2;
  
    let carX = canvas.width / 2 - car.width / 2; // upgrade it to the car not goes out of the road
  
    let animateId;
    let isGameOver = false;
  
    const drawRoad = () => {
      ctx.beginPath();
      ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
      ctx.closePath();
    };
  
    const drawCar = () => {
      ctx.beginPath();
      ctx.drawImage(car, 225, 570, carWidth, carHeight);
      ctx.closePath();
    };
  
    document.getElementById("start-button").onclick = () => {
      startGame();
    };
  function startGame() {
      startScreem.style.display = "none";
      canvas.style.display = "block";
  
      drawRoad();
      drawCar();
  
      animate();
    }
  
    const animate = () => {
      drawRoad();
      drawCar();
  
      // Right/Left boundaries
      if (isMovingLeft && carX > 0) {
        carX -= carSpeed;
      } else if (isMovingRigth && carX < carWidth - car.width) {
        carX += carSpeed;
      }
  
      if (isGameOver) {
        cancelAnimationFrame(animateId);
      } else {
        animateId = requestAnimationFrame(animate);
      }
    };
  
    // Event listeners: keyboard/moving car
    document.addEventListener("keydown", (event) => {
      console.log(event);
      if (event.key === "ArrowRight") {
        isMovingRigth = true;
      }
      if (event.key === "ArrowLeft") {
        isMovingLeft = true;
      }
    });
  
    document.addEventListener("keyup", (event) => {
      if (event.key === "ArrowRight") {
        isMovingRigth = false;
      }
      if (event.key === "ArrowLeft") {
        isMovingLeft = false;
      }
    });
  };