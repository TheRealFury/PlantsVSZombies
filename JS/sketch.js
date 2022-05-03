var wallet = 0;

var plants = []

function setup(){
  
  createCanvas(1350,600);
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
  }

  display(){
    fill(255);
    image(sunflowerImage, this.x, this.y);
  }

  spawn(){
    wallet += 1;
  }
}

function keyPressed() {
  if(keyCode == 32){
    console.log("yikes")
    newthing = new SunFlowerPlant(10,10,100,100);
    let justappend = append(plants, newthing);
  }
}