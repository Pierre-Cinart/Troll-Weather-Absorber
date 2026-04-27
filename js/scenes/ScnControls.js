// =============================================
// ScnControls.js
// Scène des contrôles
// =============================================

import Log from '../utils/Logger.js';
import Button from '../ui/Button.js';

class ScnControls extends Phaser.Scene {

    constructor() {
        super('ScnControls');
    }

    create() {

        Log.info('ScnControls chargée');

        const centerX = 640 / 2;
        const centerY = 480 / 2;

        const ui = new Button(this);

        // =============================================
        // FOND
        // =============================================
        this.add.rectangle(centerX, centerY, 640, 480, 0x0b0e17);

        // =============================================
        // TITRE
        // =============================================
        this.add.text(centerX, 80, 'CONTROLS', {
            fontSize: '42px',
            fontStyle: 'bold',
            fill: '#00ffcc'
        }).setOrigin(0.5);

        // =============================================
        // TEXTE DES CONTROLES
        // =============================================
        this.add.text(centerX, centerY, 
            'Move : ZQSD or WASD also arrows \nJump : Space', 
        {
            fontSize: '22px',
            fill: '#ffffff',
            align: 'left'
        }).setOrigin(0.5);

        // =============================================
        // BOUTON BACK
        // =============================================
        ui.create({
            x: centerX,
            y: 380,
            text: 'BACK',
            clickSound: 'clickWater',
            callback: () => {
                Log.info('→ Retour menu');
                this.scene.start('ScnMenuStart');
            }
        });
    }
}

export default ScnControls;