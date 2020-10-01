
var bunnyImg,carrotimg;

function preload(){
 bunnyImg= loadImage("bunny.png");
 carrotimg= loadImage("golden_carrot.png");
}

function setup() {
  
  createCanvas(400,400 );
  edges = createEdgeSprites();

  floor1 = createSprite(80, 262,150,5);
  floor2 = createSprite(288, 195,100,5);
  floor3 = createSprite(73, 75,100,5);

  you = createSprite(41, 344,30,60);
  you.velocityX=0;
  you.velocityY= 0;
  you.addImage(bunnyImg);
  you.scale=0.3;

   you = createSprite(41, 344,30,60);

  you.velocityX=0;
  you.velocityY= 0;

  portal = createSprite(13, 46,30,30);
   floor4 = createSprite(450, 450,160,5);
    floor5 = createSprite(300, 420, 95,5);
 carrot= createSprite(5450, 450,30,30);
  carrot.addImage(carrotimg);
  carrot.scale=0.5;

  carrot1 = createSprite(27, 236,15,30);
  carrot1.addImage(carrotimg);
  carrot1.scale=0.5;

  carrot2 = createSprite(297, 166,15,30);
  carrot2.addImage(carrotimg);
  carrot2.scale=0.5;

  carrot3 = createSprite(61, 44,15,30);
  carrot3.addImage(carrotimg);
  carrot3.scale=0.5;

  carrot4 = createSprite(450, 450,15,30);
  carrot4.addImage(carrotimg);
  carrot4.scale=0.5;

  carrot5 = createSprite(450,450,15,30);
  carrot5.addImage(carrotimg);
  carrot5.scale=0.5;
  
  carrot6 = createSprite(120, 120,15,30);
  carrot6.addImage(carrotimg);
  carrot6.scale=0.5;

  carrot7 = createSprite(120, 160,15,30);
  carrot7.addImage(carrotimg);
  carrot7.scale=0.5;

  gameState="start";



}
function draw() {
background("yellow");
  
if(  keyDown("space")) {
  you.velocityY  -10;      
      }
  if (keyWentUp("LEFT_ARROW")) {
     you.velocityX=-5;
    you.velocityY=0;
  
     }
    if (keyWentUp("RIGHT_ARROW")) {
      you.velocityX=5;
      you.velocityY=0; 
     }
    if (keyWentUp("RIGHT_ARROW")) {
       you.velocityX=5;
    you.velocityY= 0;
    
     }    
    if (gameState==="start") {
    textSize(20);
    text("Jump From Floor To Floor", 100, 118);
    text("To Achieve the delcicious carrots!", 100, 150);
    textSize(78);
    
    text("LEVEL1", 100 ,330);
    textSize(20);
    text("press (enter) to start", 142, 362);
       you.velocityX=0;
    you.velocityY= 0;
                                                                 
    }
    if (keyDown("ENTER")&& gameState==="start") {
     start(); 
     gameState= "play";
    }
    
    if (you.isTouching(portal) ) {
      floor1.x=269;
      floor1.y=354;
        
      floor2.x=64;
      floor2.y=260;
      
       floor3.x=308;
      floor3.y=227;
      
      floor4.x=60;
      floor4.y=145;
                    
    floor5.x=297;
    floor5.y=66;
    
    
    you.x=41;
    you.y=344;
    textSize(70);
    
    portal.x=450;
    portal.y=450;
    
    carrot.x=328;
    carrot.y=33;
    
    you.velocityX=3;
    you.velocityY= 4;
    
    carrot4.x=270;
    carrot4.y=329;
    
    carrot5.x=25;
    carrot5.y=232;
    
    carrot6.x=313;
    carrot6.y=193;
    
    carrot7.x=26;
    carrot7.y=106;
    
    carrot1.x=170;
      carrot1.y=380;
    
     carrot3.x=210;
      carrot3.y=380;
    carrot2.x=190;
      carrot2.y=380;
    if (keyWentUp("LEFT_ARROW")) {
       you.velocityX=-5;
    you.velocityY= 0;
    
     }
    if (keyWentUp("RIGHT_ARROW")) {
       you.velocityX=5;
    you.velocityY= 0;
    
     }    
    
      }
    if (portal.y===450) {
        textSize(60);
        
         text("LEVEL2", 5, 60); 
         textSize(20);
         
         
         if (keyWentUp("LEFT_ARROW")) {
       you.velocityX=-5;
    you.velocityY= 0;
    
     }
    
    if (keyWentUp("RIGHT_ARROW")) {
       you.velocityX=5;
    you.velocityY= 0;
    
     }    
    
    
      
    }
      if (you.isTouching(carrot1)) {
      carrot1.x=170;
      carrot1.y=380;
    }
    if (you.isTouching(carrot2)) {
      carrot2.x=190;
      carrot2.y=380;
    }
    if (you.isTouching(carrot3)) {
      carrot3.x=210;
      carrot3.y=380;
    }
    if (you.isTouching(carrot4)) {
      carrot4.x=230;
      carrot4.y=380;
    }
    if (you.isTouching(carrot5)) {
      carrot5.x=250;
      carrot5.y=380;
    }
    if (you.isTouching(carrot6)) {
      carrot6.x=270;
      carrot6.y=380;
    }
    if (you.isTouching(carrot7)) {
      carrot7.x=290;
      carrot7.y=380;
    }
      if (you.isTouching(carrot)) {
       
    
    carrot.x=310;
        carrot.y=380;
    you.velocityX=0;
    you.velocityY= 0;
    
      }
      if (carrot.y===380) {
        textSize(20);
        text("YOU WIN!!", 109, 177);
    
    you.velocityX=0;
    you.velocityY= 0;
      }
      you.velocityY=you.velocityY+0.5;

    you.collide(edges[3]);
    you.collide(floor1);
    you.collide(floor2);
    you.collide(floor3);
    you.collide(edges[0]);
    you.collide(edges[1]);
    you.collide(floor4);
    you.collide(floor5);
  drawSprites();
}


function start(){
  you.velocityY= 3; 
  you.velocityX=4;
  }
  function reset() {
    you.x = 41;
    you.y = 344;
   you.velocityX = 0;
  you.velocityY = 0;
  }
