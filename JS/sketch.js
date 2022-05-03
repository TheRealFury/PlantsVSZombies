var wallet = 20;
var plants = []

function setup(){
  
  createCanvas(1350,600);
  sunflowerImage = loadImage("Pictures/sunflower.jpg");
  sunflowerImage.resize(50,100);
  peashooterImage = loadImage("Pictures/peashooter.jpg")  
  setInterval(UpdateWallet, 1000);
}

function UpdateWallet()
{
  for(let i = 0; i < (plants.length); i++) {
    plants[i].spawn();
  }
}

function draw(){

  // The background colour.
  background(0);
  textSize(20);
  text(wallet, 200, 100);

  for(let i = 0; i < (plants.length); i++) {
    plants[i].display();
  }
  // Draws the sprites after all the logic has taken place.
  drawSprites();
}

class SunFlowerPlant {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.x = mouseX;
    this.y = mouseY;
    this.cost = 10;
  }
  display(){
    fill(255);
    image(sunflowerImage, this.x, this.y);
  }
  spawn(){
    wallet += 1;
  }
}

class PeaShooterPlant {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.x = mouseX;
    this.y = mouseY;
    this.cost = 30;
  }
  display(){
    fill(255);
    image(peashooterImage, this.x, this.y);
  }
  spawn(){
  }
}

function keyPressed() 
{
  if(keyCode == 49){
    console.log("sun flower")
    newthing = new SunFlowerPlant(1,1);
  }
  if(keyCode == 50){
    console.log("pea shooter")
    newthing = new PeaShooterPlant(1,1);
  }

  if (wallet >= newthing.cost)
  {
    let justappend = append(plants, newthing);
    wallet = wallet - newthing.cost; // deduct the cost from the wallet
  }
  else
  {
    console.log("need more money !!");
  }    
}