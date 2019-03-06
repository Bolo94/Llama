

class MiniGameMath1 extends Phaser.Scene{
    constructor(){
        super({key:'MiniGameMath1'});
        
    }

    init(){

    }

    preload(){
        // Load images
        this.load.image('loadLogo', 'Assets/img/loadLogo.png');
     
      

        //Load game audio
        //this.load.audio('levelTheme', ['Assets/sound/levelTheme.mp3']);
    }

    create(){

        //Background definitions
        let logo = this.add.sprite(0, 0, 'loadLogo');
        let fruitJar = this.add.sprite(300, 300);


  
        //Create game audio
        //this.levelTheme = this.sound.add('levelTheme');

        //Playing game audio
        //this.levelTheme.play();
        
    }

    update(){

    }
}

