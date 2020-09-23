//Create variables here
var dog, happyDog, database, foodS, foodStock;
function preload()
{
  //load images here
  dog=loadImage(images/dogImg.png);
  happyDog = loadImage(images/dogImg1.png);
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(200,200,10,10);
  happyDog = createSprite(200,150,10,10);
}


function draw() {  

  drawSprites();
  //add styles here

}
function writeStock(){
  if (x<-0){

  }else(){
    x=x-1;
  }
}


