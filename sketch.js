var wall,thickness;

var speed, weight,bullet;

var damage;



function setup() {
  createCanvas(1600, 400);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  
  
  bullet  = createSprite(50,200,20,50);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  
  wall = createSprite(1500,200,thockness, height/2);
  wall.shapeColor = (80,80,80);
  
  
 
  
  
    

  
  
  
  
}

function draw() {
  background(220);
  
 
  if(hasCollided(bullet,wall)){
     bullet.velocityX = 0;
     damage = 0.5*bulletWeight*bulletSpeed*bulletSpeed/(ThicknessofWall*ThicknessofWall*ThicknessofWall);
     }
  hasCollided(bullet,wall);
  if(damage>10) {
    wall.shapeColor = "red";
     
     }
  
  if(damage< 10) {
    wall.shapeColor = "green";
     
     }
  
  
  
     
  drawSprites();


}

function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x +bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLedtEdge){
     return true;
     }
  return false;
}