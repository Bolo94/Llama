

class MiniGameMath1 extends Phaser.Scene{
    constructor(){
        super({
            key: 'MiniGameMath1',
            physics:
            {
              
                default: 'arcade',
                arcade:
                {
                    gravity:
                    {
                       y: 220
                    },
                    debug : false
                }
            },

        });
        
    }

    init() {
        
    }

    preload(){
        // Load images
        this.load.image('bkg', 'Assets/img/mathGameBG.png');
       
        this.load.image('loadLogo', 'Assets/img/loadLogo.png');
    
        this.load.image('fruitJar', 'Assets/img/fruitJar.png');
        this.load.image('fruitBasket', 'Assets/img/basket.png');
        this.load.image('apple', 'Assets/img/appleFruit.png');
        this.load.image('redBtn', 'Assets/img/redBtn.png');
        this.load.image('blueBtn', 'Assets/img/blueBtn.png');
        this.load.image('appleJar', 'Assets/img/appleJar.png');
        this.load.image('firstSumBox', 'Assets/img/numBGRed1.png');
        this.load.image('secondSumBox', 'Assets/img/numBGRed2.png');
        this.load.image('resultSumBox', 'Assets/img/numBGBlue.png');

        //Load game audio
        this.load.audio('partyMusic', ['Assets/sound/bensound-jazzcomedy.mp3']);



        // Load sprite sheet generated with TexturePacker
        this.load.atlas('sheet', 'Assets/jsonFiles/fruit-sprites.png', 'Assets/jsonFiles/fruit-sprites.json');

        // Load body shapes from JSON file generated using PhysicsEditor
        this.load.json('shapes','Assets/jsonFiles/fruit-shapes.json');
        

        
      
    }

    create(){

    
        let overlapTriggered = false;

        //Create game audio
        this.partyMusic = this.sound.add('partyMusic');

        //Playing game audio
        this.partyMusic.play();

        //Background definitions
        let bkg1 = this.add.sprite(450, 280, 'bkg');
        bkg1.setScale(1.14);

        //Apple jar
        let appleJar = this.add.sprite(450, 160, 'appleJar');

        //logo
        let logo = this.add.sprite(50, 50, 'loadLogo').setScale(0.25);
        logo.setInteractive()
        .on('pointerdown', () => this.partyMusic.stop());


        let shapes = this.cache.json.get('shapes');


        //math equation

        let rdnNum1 = Phaser.Math.Between(1, 5);
        let rdnNum2 = Phaser.Math.Between(1, 5);

        let rdnNumsResult = rdnNum1 + rdnNum2;


        let firstSumNumBox = this.add.sprite(330, 120, 'firstSumBox');
        let firstSumNumTxt = this.add.text(315, 100, rdnNum1, {
            fontSize: '52px'
        });


        let sumSign = this.add.text(373, 100, '+', {
            fontSize: '52px',
            fill: 'white'
        });

        let secondSumNumBox = this.add.sprite(450, 120, 'secondSumBox');
        let secondSumNumTxt = this.add.text(435, 100, rdnNum2, {
            fontSize: '52px'
        });

        let equalSign = this.add.text(495, 100, '=', {
            fontSize: '52px',
            fill: 'white'
        });

        let sumResult = this.add.sprite(570, 120, 'resultSumBox');


        //Click counter
        let clickCount = 0;


        let fruits = this.physics.add.group();

        //fruit jar
        let fruitJar1 = this.add.sprite(450, 242, 'redBtn');
         fruitJar1.setInteractive()
           .on('pointerdown', () => {

                clickCount++;
               
                
                 console.log(clickCount);


                 this.fruit = fruits.create(450, 325, 'apple');
                
                 this.fruit.setCircle(20);
                 this.fruit.setBounceY(Phaser.Math.FloatBetween(0.2, 0.4));
                 this.fruit.setBounceX(Phaser.Math.FloatBetween(0.2, 0.4));
                 this.fruit.setVelocityX(Phaser.Math.FloatBetween(0.2, 0.4));
                 this.fruit.setCollideWorldBounds(true);
                 this.physics.add.collider(fruits, fruits);
                 
                      
        });

        
        
       

        
        //fruit basket
        let basket = this.physics.add.sprite(450, 500, 'fruitBasket');
        basket.setCollideWorldBounds(true);

        //Basket limits

        /*let basketSideR =this.add.rectangle(290, 490, 50, 200,  0x6666ff);
        this.physics.add.existing(basketSideR);
        basketSideR.body.immovable = true;
        basketSideR.body.collideWorldBounds = true;*/
        

        let clickMeBtn = this.add.text(427, 238, 'PUSH', {
            fontSize: '18px',
            wordWrap: {
            width: 450,
            useAdvancedWrap: true
            }
        });
            
    
    
        //Display message
        let timedEvent;

        let resultText = this.add.text(415, 160, '');




        //Done button set up and logic
        let doneBtnBox = this.add.sprite(700, 500, 'blueBtn');

        let doneBtnTxt = this.add.text(680, 490, 'Done', {
            fontSize: '18px',
            wordWrap: {
                width: 450,
                useAdvancedWrap: true
            }
        });


        doneBtnBox.setInteractive().on('pointerdown', () => {

            console.log("click count is: " + clickCount);
            console.log("random numbers result is: " + rdnNumsResult);

            //if the user click count is not equal to the sum result
            if (clickCount != rdnNumsResult) {
                resultText.setText('SORRY, YOU ARE A LOSER!');


            } else {

                //congrats msg
                resultText.setText('U WON!!!');


                //debugging
                console.log("first rdn num is " + rdnNum1);
                console.log("second rdn num is " + rdnNum2);

            }

            timedEvent = this.time.delayedCall(3000, nextEquation, [], this);

        })
        

        function nextEquation() {

             fruits.clear(true);
             console.log("Hola");

            resultText.setText('');

            //restart click count
            clickCount = 0;

            //generate new random nums
            rdnNum1 = Phaser.Math.Between(1, 6);
            rdnNum2 = Phaser.Math.Between(1, 6);

            rdnNumsResult = rdnNum1 + rdnNum2;

            //display them to the screen
            firstSumNumTxt.setText(rdnNum1);
            secondSumNumTxt.setText(rdnNum2);

        }


        


        
    }

    update(){

    }
}

