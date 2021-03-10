class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Submit");
        this.grettings = createElement("h1");
        
        
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.grettings.hide();
    }


display(){
   
    this.button.position(displayWidth/2-50,250);
    this.input.position(displayWidth/2-50, 200);
    
    
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.grettings.html("HI"+ player.name+ ",FINDING PLAYERS...");
    
        this.grettings.position(600, displayHeight/2-200)

    })
    
}
}