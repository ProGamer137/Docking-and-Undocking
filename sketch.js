var issImg;
var backgroundImg;
var spacecraft1;
var hasDocked
var spacecraft2;
var spacecraft3;
var spacecraft4;

var hasDocked = false

function preload(){
issImg = loadImage("images/iss.png")
backgroundImg = loadImage("images/spacebg.jpg")
spacecraft1 = loadImage("images/spacecraft1.png")
spacecraft2 = loadImage("images/spacecraft2.png")
spacecraft3 = loadImage("images/spacecraft3.png")
spacecraft4 = loadImage("images/spacecraft4.png")


}

function setup() {
  createCanvas(800,400);
  iss = createSprite(300,100,100,40);
  iss.addImage(issImg)
  iss.scale = 0.5

  spacecraft = createSprite(300,300,200,50)
  spacecraft.addImage(spacecraft1)
  spacecraft.scale = 0.2

}

function draw() {
  background(backgroundImg);  
  
  
  if(!hasDocked){
    console.log(hasDocked)
 // Write code to set random x position for spacecraft
  spacecraft.x= spacecraft.x + random(-1,1)

if (keyDown("LEFT_ARROW")) {
  spacecraft.addImage(spacecraft4)
  spacecraft.x =  spacecraft.x -3
}

if (keyDown("RIGHT_ARROW")) {
  spacecraft.addImage(spacecraft3)
  spacecraft.x = spacecraft.x+5
}

  
 if (keyDown("DOWN_ARROW")) {
  spacecraft.addImage(spacecraft2)
  
}

// 
if(keyDown("UP_ARROW")){
  spacecraft.y = spacecraft.y -2;
}

 }
 if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
hasDocked=true;
fill("white");
textSize(24);
text("Docking Successful", 200,300);




}
drawSprites();

}