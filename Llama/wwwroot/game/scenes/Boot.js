class Boot extends Phaser.Scene{
    constructor(){
        super({key:'Boot', active: true});
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