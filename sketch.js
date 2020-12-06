var  wall, thinckness;
var bullet, speed , weight

function setup(){
 createCanvas(1600,400);
  
 thinckness = random(22,83);
 speed = random(55,90);
 weight = random(30,52);

bullet = createSprite(50,200,45,5);
bullet.velocityX = speed;
bullet.shapeColor = color(255);


 wall = createSprite(1200, 200, thinckness, height/2);
 wall.shapeColor = color(80,80,80);


}

function draw(){
 background(225,225,225);

 hasCollided(bullet,wall) 
    
 if (hasCollided(bullet,wall)){
bullet.velocityX = 0;
 var damage = 0.5 * weight * speed * speed/(thinckness* thinckness * thinckness);

 if(damage>10){
     wall.shapeColor = color(255,0,0);
 }


 if(damage<10){
    wall.shapeColor = color(0,255,0); 
 }





 }
 
 
 drawSprites();

}

function hasCollided(bullet,wall){
 bulletRightEdge = bullet.x + bullet.width;
wallLeftEdgde =  wall.x;
if (bulletRightEdge >= wallLeftEdgde){
    return true;
}
  return false;     
}










