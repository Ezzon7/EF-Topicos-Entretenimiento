import Phaser from "phaser"

class GameScene extends Phaser.Scene{
    constructor(){
        super("GameScene");
    }

    create() {
        this.player = null; 
        this.enemies = null; 
        this.bullets = null; 
        this.cursors = null; 
        this.fireKey = null; 
        this.score = 0; 
        this.lives = 3; 
        this.timeElapsed = 0; 
        this.lastEnemyTime = 0; 

        const background = this.add.image(400, 300, 'game');
        background.setScale(2);
    
        this.cursors = this.input.keyboard.createCursorKeys();
        this.fireKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    
        this.player = this.physics.add.sprite(400, 550, 'player').setCollideWorldBounds(true);
        this.player.setScale(0.2);
    
        this.enemies = this.physics.add.group();
    
        this.bullets = this.physics.add.group();
    
        this.scoreText = this.add.text(20, 20, 'Puntaje: 0', { fontSize: '20px', fill: '#fff' });
        this.livesText = this.add.text(20, 50, 'Vidas: 3', { fontSize: '20px', fill: '#fff' });
        this.timeText = this.add.text(600, 20, 'Tiempo: 0', { fontSize: '20px', fill: '#fff' });
    
        this.physics.add.overlap(this.bullets, this.enemies, this.destroyEnemy, null, this);
        this.physics.add.overlap(this.player, this.enemies, this.hitPlayer, null, this);
    }

    update(time, delta) {
        this.timeElapsed += delta / 1000;
        this.timeText.setText(`Tiempo: ${Math.floor(this.timeElapsed)}`);
    
        if (this.cursors.left.isDown) {
          this.player.setVelocityX(-300);
        } else if (this.cursors.right.isDown) {
          this.player.setVelocityX(300);
        } else {
          this.player.setVelocityX(0);
        }
    
        if (Phaser.Input.Keyboard.JustDown(this.fireKey)) {
          this.shootBullet();
        }
    
        if (time - this.lastEnemyTime > 4000) {
          this.spawnEnemy();
          this.spawnEnemy();
          this.spawnEnemy();
          this.spawnEnemy();
          this.lastEnemyTime = time;
        }
    
        this.bullets.children.iterate((bullet) => {
          if (bullet && bullet.y < 0) {
            bullet.destroy();
          }
        });
    
        this.enemies.children.iterate((enemy) => {
          if (enemy && enemy.y > 600) {
            enemy.destroy();
          }
        });
    
        if (this.lives <= 0) {
          this.scene.start('GameOverScene', { score: this.score });
        }
    }
    
    shootBullet() {
        const bullet = this.bullets.create(this.player.x, this.player.y - 20, 'bullet');
        bullet.setVelocityY(-400);
        bullet.setCollideWorldBounds(false);
        bullet.setScale(0.5); 
    }
    
    spawnEnemy() {
        const x = Phaser.Math.Between(50, 750); 
        const enemyIndex = Phaser.Math.Between(1, 9); 
        const enemy = this.enemies.create(x, -50, `enemy${enemyIndex}`);
        enemy.setVelocityY(100); 
        enemy.setCollideWorldBounds(false);
        enemy.setScale(0.5); 
    }
    
    destroyEnemy(bullet, enemy) {
        bullet.destroy();
        enemy.destroy();
        this.score += 10;
        this.scoreText.setText(`Puntaje: ${this.score}`);
    }
    
    hitPlayer(player, enemy) {
        enemy.destroy();
        this.lives -= 1;
        this.livesText.setText(`Vidas: ${this.lives}`);
    }
}
export default GameScene