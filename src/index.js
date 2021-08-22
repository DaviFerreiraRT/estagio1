import Phaser from 'phaser';
import woof from './assets/woof.png';
import Sky from './assets/sky.png';
class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('woof', woof);
    }
      
    create ()
    {
        const woof = this.add.image(400, 150, 'woof');
      
        this.tweens.add({
            targets: woof,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });

        
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: MyGame
};

const game = new Phaser.Game(config);
