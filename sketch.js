var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
 
  bullet = createSprite(200,200,50,15);
  bullet.shapecolor = "white";
 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor= 80,80,80;
 
 

 bullet.velocityX = speed;
}

function draw() {
  background("black");
  


  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var damage =0.5 * weight * speed*speed/(thickness *thickness *thickness);
    if (damage >10)
    {
      bullet.shapeColor = "red";
    }
    
    if (damage <10)
    {
      bullet.shapeColor = "green";
    }
  }

  drawSprites();
  
}