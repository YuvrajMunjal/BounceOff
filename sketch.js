var fixedRectangle,movingRectangle

function setup() {
  createCanvas(800,400);
  movingRectangle = createSprite(300, 300, 50, 50);
  fixedRectangle = createSprite(100, 300, 50, 50);

  movingRectangle.shapeColor = "cyan" 
  fixedRectangle.shapeColor = "cyan" 

  fixedRectangle.debug = true;
  movingRectangle.debug = true;

  movingRectangle.velocityX = -5;
  fixedRectangle.velocityX = 5;
}

function draw() {
background("black")  ;  

bounceOff(movingRectangle,fixedRectangle);

drawSprites();
}



