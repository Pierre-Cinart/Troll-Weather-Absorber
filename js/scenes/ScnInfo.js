// =============================================
// ScnInfo.js
// Scene d information du projet
// =============================================

import Log from '../utils/Logger.js';
import Button from '../ui/Button.js';

class ScnInfo extends Phaser.Scene {

    constructor() {
        super('ScnInfo');
    }

    create() {
        // =============================================
        // LOG DE SCENE
        // =============================================
        Log.info('ScnInfo chargee');

        // =============================================
        // SETUP GENERAL
        // =============================================
        const centerX = 640 / 2;
        const centerY = 480 / 2;
        const ui = new Button(this);

        // =============================================
        // FOND
        // =============================================
        this.add.rectangle(centerX, centerY, 640, 480, 0x0b0e17);

        // =============================================
        // TITRE INFO
        // =============================================
        this.add.text(centerX, 150, 'Troll Weather Absorber', {
            fontSize: '22px',
            fontStyle: 'bold',
            fill: '#00ffcc',
            align: 'center'
        }).setOrigin(0.5);

        // =============================================
        // CONTENU INFO
        // =============================================
        this.add.text(
            centerX,
            centerY,
            'A tiny goofy troll\nwho absorbs elements to control the weather\nin fast-paced platformer levels.\nMade for a game jam with themes \'Little Guy\' and \'Weather\'',
            {
                fontSize: '18px',
                fill: '#ffffff',
                align: 'center'
            }
        ).setOrigin(0.5);

        // =============================================
        // BOUTON RETOUR
        // =============================================
        ui.create({
            x: centerX,
            y: 380,
            text: 'BACK',
            width: 220,
            height: 35,
            clickSound: 'clickWater',
            callback: () => {
                Log.info('-> Retour menu');
                this.scene.start('ScnMenuStart');
            }
        });
    }
}

export default ScnInfo;
