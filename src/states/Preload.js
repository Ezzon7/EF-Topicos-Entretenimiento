import Phaser from "phaser"

class PreloadScene extends Phaser.Scene{
    constructor(){
        super("PreloadScene");
    }
    preload(){
        this.load.image('menu', 'assets/fondos/menu.png');
        this.load.image('game', 'assets/fondos/game.png');  
        this.load.image('game-over', 'assets/fondos/game-over.jpg');
        this.load.image('player', 'assets/PNG/Sprites/Rockets/spaceRockets_001.png'); 
        this.load.image('bullet', 'assets/PNG/Sprites/Missiles/spaceMissiles_033.png'); 
        this.load.image('enemy1', 'assets/PNG/Sprites/Ships/spaceShips_001.png'); 
        this.load.image('enemy2', 'assets/PNG/Sprites/Ships/spaceShips_002.png'); 
        this.load.image('enemy3', 'assets/PNG/Sprites/Ships/spaceShips_003.png'); 
        this.load.image('enemy4', 'assets/PNG/Sprites/Ships/spaceShips_004.png'); 
        this.load.image('enemy5', 'assets/PNG/Sprites/Ships/spaceShips_005.png'); 
        this.load.image('enemy6', 'assets/PNG/Sprites/Ships/spaceShips_006.png'); 
        this.load.image('enemy7', 'assets/PNG/Sprites/Ships/spaceShips_007.png'); 
        this.load.image('enemy8', 'assets/PNG/Sprites/Ships/spaceShips_008.png'); 
        this.load.image('enemy9', 'assets/PNG/Sprites/Ships/spaceShips_009.png');    
             
    }
    create(){
        this.scene.start('MenuScene');
    }
}
export default PreloadScene