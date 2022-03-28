
function setup() 
{
  createCanvas(400,400);
  box = createSprite(200,200,10,10)
}

function draw() 
{
background(51);
drawSprites();
if (keyDown(RIGHT_ARROW)){
  box.x += 5
  } 
  if (keyDown(LEFT_ARROW)){
    box.x -= 5
  }
}

