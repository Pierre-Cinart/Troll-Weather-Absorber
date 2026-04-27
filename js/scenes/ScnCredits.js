import Log from '../utils/Logger.js'; 

class ScnCredits extends Phaser.Scene {
    constructor() { super('ScnCredits'); }

    create() {
        Log.info('ScnCredits chargée');
        this.add.text(320, 240, 'Scene CREDITS chargée', {
            fontSize: '32px', fill: '#ffffff'
        }).setOrigin(0.5);
    }
}
export default ScnCredits;