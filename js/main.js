//Initaliza Phaser Engine. Create a 400x490px game!

var game = new Phaser.Game(400, 490, Phaser.AUTO, 'gameDiv' );

//Create our 'main' state that will contain the game 
//This is the body of the game itself
//It should contain all codes related to the game itself 

var mainState = {
  
  preload: function () {
    //This function will execute at the beginning 
    //Which is where we'll load our assets for the game 
    
    //Set the background color of the game 
    game.stage.backgroundColor = "#71c5cF" ;
    
    game.load.image('bird', 'Assets/bird.png');
    
    game.load.image('pipe', 'Assets/pipe.png');
    
    
},
  
  
  create: function () {
    //This function is called right after preload function 
    //This is where we set up the game assets from earlier 
    
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    this.bird = this.game.add.sprite(100, 300, 'bird');
    
    //Now that we have a bird and gravity... we need to tell the bird
    //to react to the gravity
    
    game.physics.arcade.enable(this.bird);
    
    this.bird.body.gravity.y = 1000;
  
    
  var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);  
    
    spaceKey.onDown.add(this.jump, this);
    },
    
    
    
    
    update: function () {
  //This funciton runs 60 times per second
  
  //Check if the bird is outside of the gamescreen
  if(this.bird.inWorld == false){
    this.restartGame();
  }
 },
 
 
 jump: function () {
   
   //Let's make out bird jump!
   this.bird.body.velocity.y = -350;
 },
  
  
  restartGame: function () {
  game.state.start('main');
},
  
};
//Add and start the 'mainState to start the game
game.state.add('main', mainState);
game.state.start('main');
