

class MiniGameMath1 extends Phaser.Scene{
    constructor(){
        super({
            key: 'MiniGameMath1',
            //active: true,
            physics:
            {
              
                default: 'arcade',
                arcade:
                {
                    gravity:
                    {
                       y: 200
                    }
                }
            },

        });
        
    }

    init() {
        
    }

    preload(){
        // Load images
        this.load.image('bkg', 'Assets/img/clubBackground.jpg');
       
        this.load.image('loadLogo', 'Assets/img/loadLogo.png');
    
        this.load.image('fruitJar', 'Assets/img/fruitJar.png');
        this.load.image('fruitBasket', 'Assets/img/fruitBasket.png');


        //Load game audio
        this.load.audio('partyMusic', ['Assets/sound/bensound-jazzcomedy.mp3']);



        // Load sprite sheet generated with TexturePacker
        this.load.atlas('sheet', 'Assets/jsonFiles/fruit-sprites.png', 'Assets/jsonFiles/fruit-sprites.json');

        // Load body shapes from JSON file generated using PhysicsEditor
        this.load.json('shapes','Assets/jsonFiles/fruit-shapes.json');
        

        this.load.image('strawberry', 'Assets/img/fruit.png');
      
    }

    create(){

    
        let overlapTriggered = false;

        //Create game audio
        this.partyMusic = this.sound.add('partyMusic');

        //Playing game audio
        this.partyMusic.play();

        //Background definitions
        let bkg1 = this.add.sprite(450, 280, 'bkg');
        bkg1.setScale(1.3);

        //logo
        let logo = this.add.sprite(50, 50, 'loadLogo').setScale(0.25);
        logo.setInteractive()
        .on('pointerdown', () => this.partyMusic.stop());


        let shapes = this.cache.json.get('shapes');


        //math equation

        let rdnNum1 = Phaser.Math.Between(1, 6);
        let rdnNum2 = Phaser.Math.Between(1, 6);

        let rdnNumsResult = rdnNum1 + rdnNum2;


        let firstSumNumBox = this.add.sprite(370, 80, 'fruitJar').setScale(0.2);
        let firstSumNumTxt = this.add.text(355, 60, rdnNum1, {
            fontSize: '52px'
        });


        let sumSign = this.add.text(413, 60, '+', {
            fontSize: '52px',
            fill: 'white'
        });

        let secondSumNumBox = this.add.sprite(490, 80, 'fruitJar').setScale(0.2);
        let secondSumNumTxt = this.add.text(475, 60, rdnNum2, {
            fontSize: '52px'
        });

        let equalSign = this.add.text(530, 60, '=', {
            fontSize: '52px',
            fill: 'white'
        });

        let sumResult = this.add.sprite(600, 80, 'fruitJar').setScale(0.2);


        //Click counter
        let clickCount = 1;


        let fruits = this.physics.add.group();

        //fruit jar
        let fruitJar1 = this.add.sprite(450, 200, 'fruitJar').setScale(0.3);
         fruitJar1.setInteractive()
           .on('pointerdown', () => {
               // shows fruit and goes down to the basket
               
            //    let fruitGroup = this.physics.add.group({
            //         key: 'fruit',
            //         bounceX: 0.4,
            //          bounceY: 0.4,
            //          collideWorldBounds: true
            //      });
                  
            //      this.physics.arcade.collide(fruitGroup, fruitGroup);

            //      this.fruit = fruitGroup.create(450, 200, 'sheet', 'cherries', {
            //         shape: shapes.cherries
            //     }).setScale(0.5);
            

                //this.physics.add.collider(fruitGroup, fruitGroup);
                // this.fruit = this.physics.add.sprite(450, 200, 'sheet', 'cherries', {
                //     shape: shapes.cherries
                // }).setScale(0.5);

                

               
                
                 //console.log(fruit);

                 this.fruit = fruits.create(450, 200, 'strawberry');
                 this.fruit.setBounceY(Phaser.Math.FloatBetween(0.2, 0.4));
                 this.fruit.setBounceX(Phaser.Math.FloatBetween(0.2, 0.4));
                 this.fruit.setCollideWorldBounds(true);
                 this.physics.add.collider(fruits, fruits);
                      


            //if the user click count is not equal to the sum result
            if(clickCount != rdnNumsResult){
                clickCount++;
                console.log(clickCount);
            }
            else{
                //restart click count
                clickCount = 1;
                
                //generate new random nums
                rdnNum1 = Phaser.Math.Between(1,6);
                rdnNum2 = Phaser.Math.Between(1,6);

                //display them to the screen

                firstSumNumTxt.setText(rdnNum1);
                secondSumNumTxt.setText(rdnNum2);


                //debugging
                console.log("first rdn num is " + rdnNum1);
                console.log("second rdn num is " + rdnNum2);



                //congrats msg
                this.add.text(415, 160, 'U WON!!');
            }
        });

       
        
        //fruit basket
        let basket = this.physics.add.sprite(450, 500, 'fruitBasket');
        basket.setCollideWorldBounds(true);

        /*let basketCollider = this.physics.add.image(450, 400, 'fruitBasket').setImmovable();
        basketCollider.setScale(1,0.2);
        basketCollider.body.setAllowGravity(false);*/
        
      /* function countingFruits(fruits, basket){
        console.log("Counting Fruits: ");
        
            
        }*/
      
        //Overlap collider
       // this.physics.add.overlap(fruits, basket, countingFruits, null, this);
      
      

        let clickMeBtn = this.add.text(415, 190, 'CLICK ME!', {
            fontSize: '18px',
            wordWrap: {
            width: 450,
            useAdvancedWrap: true
            }
        });

        
        let DoneBtn = this.add.text(650, 500, 'Done!', {
            fontSize: '18px',
            wordWrap: {
            width: 450,
            useAdvancedWrap: true
            }
        });


        
        


        


        
    }

    update(){

    }
}

