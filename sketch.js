var box
function setup() {
  createCanvas(400,400);
box = createSprite(200,200,60,60)  
}

function draw() 
{
  background(30);
drawSprites();
if (keyDown("up")){
  box.y=box.y-5
}
}




