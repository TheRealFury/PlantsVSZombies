var wallet = 10;
var sunflowers = [];
var peashooters = [];

function setup(){
  
  // Set the stage - the canvas.
  createCanvas(1350,650);

  sunflowerImage = loadImage("Pictures/sunflower.png");
  peashooterImage = loadImage("Pictures/Peashooter.png");
  peaImage = loadImage("Pictures/Pea.png");
}

function draw(){

  // The background colour.
  background(0);

  textSize(20);
  text(wallet, 50, 100);
  drawLines();
  SunflowerFunctions(); 
  PeashooterFunctions();

  // Draws the sprites after all the logic has taken place.
  drawSprites();
}

function SunflowerFunctions(){
  for(let i = 0; i < (sunflowers.length); i++) {
    sunflowers[i].display();
    sunflowers[i].spawn();
  }
}
function PeashooterFunctions(){
  for(let i = 0; i < (peashooters.length); i++) {
    peashooters[i].display();
  }
}

function drawLines(){
  // Vertical Lines
  rect(150, 10, 10, 600);
  rect(250, 10, 10, 600);
  rect(350, 10, 10, 600);
  rect(450, 10, 10, 600);
  rect(550, 10, 10, 600);
  rect(650, 10, 10, 600);
  rect(750, 10, 10, 600);
  rect(850, 10, 10, 600);
  
  // Horizontal Lines
  rect(150, 10, 710, 10);
  rect(150, 130, 710, 10);
  rect(150, 250, 710, 10);
  rect(150, 370, 710, 10);
  rect(150, 490, 710, 10);
  rect(150, 610, 710, 10);

}

class SunFlower {
  constructor(height, width) {
    this.x = mouseX;
    this.y = mouseY;
  }

  display(){
    fill(255);
    image(sunflowerImage, this.x, this.y);
  }

  spawn(){
    wallet += 1;
  }
}
class PeaShooter {
  constructor(height, width) {
    this.x = mouseX;
    this.y = mouseY;
  }

  display(){
    image(peashooterImage, this.x, this.y);
  }
}

// Checks which key has been pressed and accordingly spawns plant.
function keyPressed() {
  if(keyCode == 49){
    newsunflower = new SunFlower(10, 10, 100, 100);
    let appendsunflower = append(sunflowers, newsunflower);
  }
  if(keyCode == 50){
    newpeashooter = new PeaShooter(10, 10, 100, 100);
    let appendpeashooter = append(peashooters, newpeashooter);
  }
}