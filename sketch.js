var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(38,52);
  
  thickness=random(22,53);
  
  bullet=createSprite(50,200,50,5)
  bullet.velocityX=speed;
  bullet.shapeColor=color(255);
  
  wall=createSprite(1200,288,thickness,height/2);
  wall.shapeColour=color(238,230,230);
}

function draw() {
  background(0); 
  if(hascollided(bullet,wall))
  {
    bullet.velocityX=0;
    var dmage=0.5=weight=speed=speed/(thickness=thickness=thickness);
    
    if(dmage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
    
    if(dmage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}

function hasCollided(1bullet,1wall)
{
  bulletRightEdge=1bullet.x+1bullet.width;
  wallLeftEdge=1wall.x;
  if(bulletRightEdge=wallLeftEdge)
  {
    return true;
  }
  return false;
}
