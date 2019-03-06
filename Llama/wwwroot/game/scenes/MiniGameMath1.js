

class MiniGameMath1 extends Phaser.Scene{
    constructor(){
        super({key:'MiniGameMath1'});
        
    }

    init(){

    }

    preload(){
        // Load images
        this.load.image('loadLogo', 'Assets/img/loadLogo.png');
    
        this.load.image('fruitJar', 'Assets/img/fruitJar.png');

     
      

        //Load game audio
        //this.load.audio('levelTheme', ['Assets/sound/levelTheme.mp3']);
    }

    create(){

        //Background definitions
        let logo = this.add.sprite(0, 0, 'loadLogo');
        let fruitJar1 = this.add.sprite(300, 300, 'fruitJar');


  
        //Create game audio
        //this.levelTheme = this.sound.add('levelTheme');

        //Playing game audio
        //this.levelTheme.play();
        
    }

    update(){

    }
}

