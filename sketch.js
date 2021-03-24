var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(600, 200, 50, 80);
  gameObject1.shapeColor = "green";
  gameObject1.debug = true;
  gameObject2 = createSprite(600, 300, 50, 80);
  gameObject2.shapeColor = "green";
  gameObject2.debug = true;
  gameObject3 = createSprite(600, 500, 50, 80);
  gameObject3.shapeColor = "green";
  gameObject3.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect, gameObject1)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }
  
  drawSprites();
}
