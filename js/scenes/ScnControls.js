import Log from '../utils/Logger.js'; 

class ScnControls extends Phaser.Scene {
    constructor() { super('ScnControls'); }

    create() {
        Log.info('ScnControls chargée');
        this.add.text(320, 240, 'Scene CONTROLS chargée', {
            fontSize: '32px', fill: '#ffffff'
        }).setOrigin(0.5);
    }
}
export default ScnControls;


