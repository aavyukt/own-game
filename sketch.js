var bob,bobimg,trash1img

function preload(){
bobimg=loadImage("bob.png");
trash1img=loadImage("plastic_bag_PNG32.png");
}

function setup(){
    var canvas = createCanvas(800,600);
    bob=createSprite(200,200,10,30);
    bob.addImage(bobimg);
    bob.scale=0.1;
}
function draw(){
    background(0);
    if(keyWentDown(UP_ARROW)){
       bob.velocityY=-3
       bob.velocityX=0
    }
    if(keyWentDown(DOWN_ARROW)){
        bob.velocityY=3
        bob.velocityX=0
     }
     if(keyWentDown(RIGHT_ARROW)){
        bob.velocityX=3
        bob.velocityY=0
     }
     if(keyWentDown(LEFT_ARROW)){
        bob.velocityX=-3
        bob.velocityY=0
     }
     if(keyWentUp(UP_ARROW)){
      bob.velocityY=0
      bob.velocityX=0
   }
   if(keyWentUp(DOWN_ARROW)){
       bob.velocityY=0
       bob.velocityX=0
    }
    if(keyWentUp(RIGHT_ARROW)){
       bob.velocityX=0
       bob.velocityY=0
    }
    if(keyWentUp(LEFT_ARROW)){
       bob.velocityX=0
       bob.velocityY=0
    }
    Trash1();
     drawSprites()
}
 function Trash1 (){
trash1=createSprite(random(10,790),random(10,590),50,50)
//trash1.velocityX=0
//trash1.velocityY=3
trash1.addImage(trash1img);
trash1.scale=0.07
}
function Trash2(){
   
}
function Trash3 (){
   
}