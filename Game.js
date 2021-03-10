class Game{
    constructor(){

    }
    
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('PlayerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }

  }
  play(){
    form.hide();

    


    Player.getPlayerInfo();
    this.obstacles();
    this.ground2();
console.log(player.index);
var index = 0;
var y;
if(allPlayers!==null){
  
for(var plr in allPlayers){
  console.log(allPlayers);
  index = index+1;
  y = displayHeight - allPlayers[plr].distance;
  Marios[index-1].y = y;
}
}
    if(keyDown("space") ){
    if(player.index === 1){
     Mario.velocityY = -4;
      player.distance = Mario.y;
    }
    else{
      Mario2.velocityY = -4;
    }

}
Mario.velocityY += 0.8;
Mario2.velocityY += 0.8; 
  }
obstacles(){

  if( frameCount % 100 === 0){
    var spikedBall = createSprite(displayWidth, Math.round(random(450, 650)), 20, 20);
    spikedBall.velocityX = -10;
    spikedBall.addImage(ballImage);
    spikedBall.scale = 1.3;

  }


}
ground2(){

  if(frameCount % 150 === 0){
    var ground1 = createSprite(displayWidth,Math.round(random(450, 550)), 20,20);
    ground1.velocityX = -10;
    ground1.addImage(groundImage);
    ground1.scale = 0.5;
  }
}

plasticBottles(){
  
}



//if(allPlayers !== undefined){
  

//  for(var plr in allPlayers){
   

//}
}