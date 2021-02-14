var background1 //space
var spaceShip //main thingy
var meteriods //obstacles
var astronaut
var Thingy, galaxy, starImage, astronaut_Image;//Thingy
var jupiter //goal
var intro1, intro2, intro3 ; //intro 
var score = 0
var asteroid, asteroidImage;

var gameState = "storyLine1"

function preload(){
  
  intro1 = loadImage("intro1.jpeg");
  intro2 = loadImage("intro 2.jpeg");
  intro3 = loadImage("intro 3.jpg");
  Recap = loadImage("Recap.PNG");

  galaxy = loadImage("galaxy2-1.jpg")
  starImage = loadImage("star.png");

  launch = loadImage("launch.jpeg");
  
  Rocket = loadImage("space ship.png");
  astronaut_Image = loadImage("Coolastronaut.png");
  asteroid_Image = loadImage("asteroid.png")

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  
  

}

function draw() {
  //fill("red")
  
  
  if(keyDown("space") && gameState === "storyLine1"){

    gameState = "storyLine2"

  }
  if(keyDown("c") && gameState === "storyLine2"){

    gameState = "storyLine3"

  }
  if(keyDown("space") && gameState === "storyLine3"){

    gameState = "Recap"

  }
  if(keyDown("l") && gameState === "Recap"){

    gameState = "launch time"

  }
  if(keyDown("t") ){

    gameState = "start"

  }





  if (gameState === "storyLine1"){

    background(intro1);  

  }
  if (gameState === "storyLine2"){

    background(intro2);  

  }
  if (gameState === "storyLine3"){

    background(intro3);  

  }
  if (gameState === "Recap"){

    background(Recap);  

  }
   if (gameState === "launch time"){
      
      background  (launch);
      fill("white")
      textSize(28)
      text("So, your partner had to work on ",50,100)
      text("getting out of EARTH ATMOSPHERE",50,130)
      text("therefore its your turn to take over",50,160)
      text("press T to take control for jupiter",50,190)       

    }
   if (gameState === "start"){

    background("black");
    rocket();     
    spawNTHINGIES();
    asteroidShower();
    textSize(24)
    fill("skyBlue")
    text("Distance Covered: "+ score,1390,100);
  }


  
  text("X: "+ mouseX + ", "+ "Y: " + mouseY,200,200);
  



  drawSprites();




}
function rocket(){

  spaceShip = createSprite(800,780,50,50);
  spaceShip.addImage(Rocket)
  spaceShip.scale = 0.4;
  if (keyDown("LEFT_ARROW")) {
    spaceShip.x = spaceShip.x - 10;
  }
  if (keyDown("RIGHT_ARROW")) {
    spaceShip.x = spaceShip.x + 10;
  }
  
}

function spawNTHINGIES(){

  if (frameCount % 0.5 === 0) {

    star = createSprite(500, 0, 40, 10);
    star.x = Math.round(random(windowWidth));
    star.addImage(starImage);
    star.velocityY = 45;
    star.scale = 0.02;

  }
  if (frameCount % 300 === 0) {
    astronaut = createSprite(0, 300, 40, 10);
    astronaut.addImage(astronaut_Image);
    astronaut.scale = 0.4;
    astronaut.y = Math.round(random(windowWidth));
    astronaut.velocityX = 7;
  }
 }
 function asteroidShower() {

  if (frameCount % 10 === 0) {
    asteroid = createSprite(30, 0, random, random);
    asteroid.addImage(asteroid_Image);
    asteroid.setCollider("circle", 0, 40, 415);

    asteroid.x = Math.round(random(windowWidth));
    asteroid.velocityY = +(10 + 5 * score / 1000)
    asteroid.scale = 0.09;
    asteroid.depth = asteroid.depth + 5;

  }

 }