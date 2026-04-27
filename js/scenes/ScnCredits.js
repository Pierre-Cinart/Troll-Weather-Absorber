// =============================================
// ScnCredits.js
// Scène des crédits
// =============================================

import Log from '../utils/Logger.js';
import Button from '../ui/Button.js';

class ScnCredits extends Phaser.Scene {

    constructor() {
        super('ScnCredits');
    }

    create() {

        Log.info('ScnCredits chargée');

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
        this.add.text(centerX, 80, 'CREDITS', {
            fontSize: '42px',
            fontStyle: 'bold',
            fill: '#00ffcc'
        }).setOrigin(0.5);

        // =============================================
        // TEXTE DES CREDITS
        // =============================================
        this.add.text(centerX, centerY, 
            'Game by Pawat LabZ\n\nPowered by Phaser\n\nThanks for playing!',
        {
            fontSize: '22px',
            fill: '#ffffff',
            align: 'center'
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

export default ScnCredits;