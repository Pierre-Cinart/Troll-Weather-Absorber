import Log from '../utils/Logger.js'; 

class ScnInfo extends Phaser.Scene {
    constructor() { super('ScnInfo'); }

    create() {
        Log.info('ScnInfo chargée');
        this.add.text(320, 240, 'Scene INFO chargée', {
            fontSize: '32px', fill: '#ffffff'
        }).setOrigin(0.5);
    }
}
export default ScnInfo;