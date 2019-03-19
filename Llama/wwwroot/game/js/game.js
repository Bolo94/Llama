const App = function(){
    'use strict';
};

App.prototype.start = function(){
    'use strict';

    //Scenes
    let scenes = [];

    scenes.push(Boot);
    scenes.push(PlayGround);
    scenes.push(MiniGameMath1);
    

    

    // Configuration
    let config = {
        type: Phaser.AUTO, //Phaser will decide how to render our game (WebGL or Canvas)
        parent: "game-screen",
        width: 900, // game width
        height: 550, // game height
        physics:{
            default: 'matter',
            matter: {
                gravity: {
                    x: 0,
                    y: 0
                }
            }
        },
        
        scene: scenes // our newly created scene
        }
        
        // Create the game, and pass it the configuration
    let game = new Phaser.Game(config);
}





     
    
   
