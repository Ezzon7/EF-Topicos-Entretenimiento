import Phaser from "phaser"

class MenuScene extends Phaser.Scene{
    constructor(){
        super("MenuScene");
    }
    init(){
        
    }
    create() {
        const background = this.add.image(400, 300, 'menu');
        background.setScale(2);

        const titleStyle = { font: '40px Arial', fill: '#ffffff' };
        const nameStyle = { font: '30px Arial', fill: '#ffffff' };

        this.add.text(250, 150, 'Welcome Gaaaaaa!', titleStyle);
        this.add.text(250, 220, 'Enzo Camargo', nameStyle);

        this.input.on('pointerdown', () => {
            this.scene.start('GameScene');
        });
    }
    update(){

    }

}
export default MenuScene