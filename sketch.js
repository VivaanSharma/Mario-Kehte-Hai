 var game;
var database;
var form;
var gameState = 0;
var player;

var ground;


var backgroundImage;
var Bg;
var playerCount;
var Mario;
var allPlayers;
var MarioImage;
var Mario2;
var ballImage;
var groundImage;
var score;
function preload(){
	


MarioImage = loadAnimation("Images/Mario1.png","Images/Mario2.png","Images/Mario3.png","Images/Mario4.png","Images/Mario5.png"
,"Images/Mario6.png","Images/Mario7.png","Images/Mario8.png","Images/Mario9.png","Images/Mario10.png","Images/Mario11.png","Images/Mario12.png")
	
ballImage = loadImage("Images/SpikedBall.png");

groundImage = loadImage("Images/ground.png");

}


function setup(){

	database = firebase.database();
createCanvas(displayWidth, displayHeight-130);



Mario = createSprite(100,610,50,50);
Mario.addAnimation("running",MarioImage);
Mario.scale = 0.2;


Mario2 = createSprite(150,610,50,50);
Mario2.addAnimation("running",MarioImage);
Mario2.scale = 0.2;

Marios = [Mario, Mario2];



game = new Game();
game.getState();
if(gameState === 0){
	game.start();
}


ground = createSprite(1000, 680, 2000, 20);

}


function draw(){

	 
Mario.collide(ground);
Mario2.collide(ground);
Mario.debug = true;
Mario2.debug = true;
	  if(keyDown("space")){
		
	  }

	  if(playerCount === 2){
		  game.update(1);
	  }
	  if(gameState === 1){
		  game.play();
	  }
	background(255);
	drawSprites();
	
}
