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
  text(wallet, 50, 30);
  text("1", 85, 155);
  text("2", 85, 265);
  text("3", 85, 375);
  text("4", 85, 485);
  text("5", 85, 595);
  drawLines();
  SunflowerFunctions(); 
  PeashooterFunctions();
  displayPlants();

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

function displayPlants(){
  image(sunflowerImage, 15, 65);
  image(peashooterImage, 10, 170)
}

function drawLines(){

  // Grid Lines//
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
  //

  // Display Lines//
  rect(0, 50, 10, 560);
  rect(100, 50, 10, 560);
  rect(10, 50, 90, 10);
  rect(10, 160, 90, 10);
  rect(10, 270, 90, 10);
  rect(10, 380, 90, 10);
  rect(10, 490, 90, 10);
  rect(10, 600, 90, 10);
  //
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