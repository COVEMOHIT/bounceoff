var bounce1,bounce2
function setup() {
  createCanvas(800,400);
bounce1=  createSprite(200, 200, 50, 50);
bounce2=createSprite(700,200,50,50);
bounce1.velocityX=5;
bounce2.velocityX=-5;
}

function draw() {
  
  background(0);  
  
  
  bounce1.shapeColor="yellow"
  bounce2.shapeColor="blue"
  
 
 
  if(bounce1.x-bounce2.x<bounce1.width/2+bounce2.width/2&&bounce2.x-bounce1.x<bounce2.width/2+bounce1.width/2){
  
    bounce1.velocityX=-5;
    bounce2.velocityX=5;
  }

  drawSprites();



}