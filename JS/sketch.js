var wallet = 20;
var plants = []
var projectiles = []
canvasWidth = 1350;

function setup()
{
  createCanvas(canvasWidth,600);
  sunflowerImage = loadImage("Pictures/sunflower.jpg");
  peashooterImage = loadImage("Pictures/peashooter.jpg")  
  peaImage = loadImage("Pictures/pea.png")  
  setInterval(UpdateWallet, 1000);
  setInterval(Attack, 1500);
  setInterval(cleanProjectiles,500);
}

function UpdateWallet()
{
  for(let i = 0; i < (plants.length); i++) {
    plants[i].spawn();
  }
}

function Attack()
{
  for(let i = 0; i < (plants.length); i++) {
      plants[i].Attack(); // Attack
  }
}

function cleanProjectiles() // clear the projectiles from the memory which are near the boudary
{
  count = projectiles.length;
  for(let i = 0; i < (count); i++) 
  {
    if (projectiles[i].x > canvasWidth - 300)
    {
      projectiles.splice(i,1);
      count--;
      i--;
    }
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
  for(let i = 0; i < (projectiles.length); i++) {
    projectiles[i].display();
  }
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
    fill(0);
    image(sunflowerImage, this.x, this.y);
  }
  spawn(){
    wallet += 1;
  }
  Attack(){}
}

class PeaShooterPlant {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.x = mouseX;
    this.y = mouseY;
    this.cost = 10;
  }
  display(){
    fill(255);
    image(peashooterImage, this.x, this.y);
  }
  Attack(){
    newthing = new Pea(this.x + 100,this.y + 10);
      let justappend = append(projectiles, newthing);
  }
  spawn(){  }
}
class Pea{
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  display(){
    fill(255);
    image(peaImage, this.x, this.y);
    this.x = this.x + 5;
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
