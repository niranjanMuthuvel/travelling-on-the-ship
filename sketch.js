var sea,seaImg
var ship,ship_running,ship_collide;

function preload(){
seaImg = loadImage("sea.png")
ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(600,400)
  ship = createSprite(80,250,20,50)
  ship.addAnimation("running",ship_running)


  ship.scale = 0.15

  sea = createSprite(200,200)
  sea.addImage("sea",seaImg)
  sea.scale = 0.3
}
function draw() {
 
  background("blue");
  sea.velocityX = -4
  if(sea.x< 0){
    sea.x = sea.width/8
  }
  sea.depth = ship.depth
  ship.depth = ship.depth+1

  drawSprites();
}