

function preload(){

bgimg=loadImage("images/bg.jpg")
ironman=loadImage("images/iron.png")
stoneimage=loadImage("images/stone.png")
}

function setup() {
createCanvas(1000, 600);
bg=createSprite(500,300);
bg.addImage(bgimg)
bg.scale=2
bg.velocityX=-5
ironMan=createSprite(100,430);
ironMan.addImage(ironman)
ironMan.scale=0.25;
stoneGroup=new Group
}

function draw(){
background("lightblue")
drawSprites()
if(bg.x<240){
    bg.x=500
}
if(keyDown("up")){
  ironMan.velocityY=-10
}
if(keyDown("left")){
  ironMan.x=ironMan.x-5
}
if(keyDown("right")){
  ironMan.x=ironMan.x+5
}
  ironMan.velocityY=ironMan.velocityY+0.5;
  generateStone()
  ironMan.debug=true;
  ironMan.setCollider("rectangle",100,0,200,400)
  for(var i=0; i<stoneGroup.length; i++)
  {
    var temp= stoneGroup.get(i);
    if(temp.isTouching(ironMan))
    {
      ironMan.collide(temp);
    }
  }
}
function generateStone()
{
    if(frameCount%50==0)
    {
      stone=createSprite(1100,random(70,450),45,10)
      stone.velocityX=-5
      stone.velocityY=3
      stone.lifetime=300
      stone.addImage(stoneimage)
      stoneGroup.add(stone);
      stone.scale=0.5
    }
}
  