class Boot extends Phaser.Scene{
    constructor(){
        super({key:'Boot'});
        console.log("Booting");
    }

    init(){

    }

    preload(){

    }

    create(){
        this.scene.start('PlayGround');
    }

   
}