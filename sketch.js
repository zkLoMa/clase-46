var player, ojo, tim, rush, canrun;
var suelo;

function preload(){
  ojoImage = loadImage("Look at me.jpg");
  timImage = loadImage("tim.jpg");
  rushImage = loadImage("rush.jpg");
  canrunImage = loadImage("You can run.walk.png");
  
}

function setup(){
  createCanvas(600,600);
  player = createSprite(90,450,50,50);
  ojo = createSprite(10,70,50,50);
  ojo.addImage("ojo",ojoImage);
  ojo.scale = 0.5;
  tim = createSprite(70,200,50,50);
  tim.addImage("tim",timImage);
  tim.scale = 0.5;
  rush = createSprite(400,350,50,50);
  rush.addImage("rush",rushImage);
  rush.scale = 0.5;
  canrun = createSprite(200,400,50,50);
  canrun.addImage("canrun",canrunImage);
  canrun.scale = 0.5;
  suelo = createSprite(300,590,600,10);
}

function draw(){
  background("pink");
  if(keyDown(LEFT_ARROW)){
    player.x = player.x-3
  }
  if(keyDown(RIGHT_ARROW)){
    player.x = player.x+3
  }
  if(keyDown("space")){
    player.velocityY = -8
  }
  player.velocityY = player.velocityY+0.8;
  player.collide(suelo);
  drawSprites();
}