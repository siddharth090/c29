var box1, box2, box3, box4, gun;
function setup() {
  createCanvas(1200,800);

  box1 = createSprite(500, 50, 50, 80);
  box1.shapeColor = "red";
  box1.debug = true;
  box2 = createSprite(600, 50, 50, 80);
  box2.shapeColor = "red";
  box2.debug = true;
  box3 = createSprite(700, 50, 50, 80);
  box3.shapeColor = "red";
  box3.debug = true;
  box4 = createSprite(800, 50, 50, 80);
  box4.shapeColor = "red";
  box4.debug = true;
  
  
  gun = createSprite(700, 600,10,30);
  gun.shapeColor = "blue";
  gun.debug = true;
  gun.velocityY = -5;
  
  function mousepressed(event){
  console.gun();
  }
}

function draw() {
  background(44);  
  drawSprites();
  
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
}