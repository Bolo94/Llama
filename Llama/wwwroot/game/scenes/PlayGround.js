

class PlayGround extends Phaser.Scene{
    constructor(){
        super({key:'PlayGround'});
        console.log("PlayGround");
    }

    init(){
        this.playerSpeed = 1.5;
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    preload(){
         // Load images
    //this.load.image('llamas', 'Assets/llamaPlayer.png');
    this.load.image('bg', 'Assets/img/bg.png');
    this.load.image('forest', 'Assets/img/forest.png');
    this.load.image('constructionDown', 'Assets/img/constructionRightDown.png');
    this.load.image('walkway', 'Assets/img/walkway.png');
    this.load.image('redFlower', 'Assets/img/redFlower.png');
    this.load.image('pinkFlower', 'Assets/img/pinkFlower.png');
    this.load.image('mathlab', 'Assets/img/mathLab.png');


    //Load game spritesheets      
    this.load.spritesheet('player', 'Assets/img/playerSpriteSheet.svg',
    { frameWidth: 82.59, frameHeight: 162, endFrame: 10 });
    

    //Load game audio
    this.load.audio('levelTheme', ['Assets/sound/levelTheme.mp3']);

    }

    create(){

        //Create game audio
        this.levelTheme = this.sound.add('levelTheme');

        //Playing game audio
        this.levelTheme.play();
        
         //Background definitions
    let bg = this.add.sprite(0, 0, 'bg');
    bg.setScale(2);

     //Walkway background
    let walkway = this.add.sprite(400, 300, 'walkway');
    walkway.setScale(1.2);

    //Create setting group for collision
    /*setting = this.matter.add.staticGroup();
    setting.create(160, 150, 'forest');
    setting.create(800, 400, 'constructionDown');*/

    //Flowers
    let redFlower1 = this.add.sprite(100, 400, 'redFlower');
    let pinkFlower1 = this.add.sprite(150, 400, 'pinkFlower');
    let redFlower2 = this.add.sprite(600, 200, 'redFlower');
    let pinkFlower2 = this.add.sprite(650, 200, 'pinkFlower');
   

    //Forest background
   let forest = this.matter.add.sprite(160, 150, 'forest').setStatic(true);
 

    //Construction background
    let contructionDown = this.matter.add.sprite(800, 400, 'constructionDown').setStatic(true);

    let cat2 = this.matter.world.nextCategory();

    //MathLab background
    let mathlab = this.matter.add.sprite(700, 100, 'mathlab').setStatic(true);
    mathlab.setCollisionCategory(cat2);
   
    
    let cat1 = this.matter.world.nextCategory();

    //Player definitions
    this.player = this.matter.add.sprite(400, 300, 'llamas');
    this.player.setScale(0.7);
    //this.player.body.setGravityX(0);
    
    //this.player.setCollideWorldBounds(true);
    //this.player.anchor.setTo(0.5);

    //Collision detection
    //this.physics.add.collider(this.player, setting);

     //Passing scene and theme for the collision detection function
    let nextScene = this.scene;
    //Passing scene and theme for the collision detection function
    let theme = this.levelTheme;
   
    this.player.setCollidesWith([ cat1, cat2 ]);

    
    this.matter.world.on('collisionstart', function (event) {
        theme.stop();
        nextScene.start('MiniGameMath1');
    });

    //Animations Definitions
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
        frameRate: 5,
        repeat: -1
    });

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('player', { start: 4, end: 7 }),
        frameRate:5 ,
        repeat: -1
    });

    this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('player', { start: 8, end: 11 }),
        frameRate:5 ,
        repeat: -1
    });

  
    }

    changeTheme() {
        this.levelTheme.stop();
        this.scene.start('MiniGameMath1');
    }

    update() {

        //this.game.physics.arcade.collide(this.player, mathLab, this.changeTheme(), null, this);
        //App.game.physics.arcade.collide(this.player, mathLab, this.changeTheme(), null, this);
        

    //Player Controls

    if (this.cursors.left.isDown)
    {
        this.player.x -=this.playerSpeed;

        this.player.anims.play('left', true);
    }
    
    else if (this.cursors.right.isDown)
    {
        this.player.x += this.playerSpeed;

        this.player.anims.play('right', true);
    }
    else if (this.cursors.up.isDown)
    {
        this.player.y -= this.playerSpeed;

       this.player.anims.play('up', true);
    }
    else if (this.cursors.down.isDown)
    {
        this.player.y += this.playerSpeed;

       // player.anims.play('right', true);
    }
    
    else if (!this.cursors.left.isDown)
    {
        this.player.anims.play('left', false);
    }
    else if (!this.cursors.right.isDown)
    {
        this.player.anims.play('right', false);
    }

    }

}