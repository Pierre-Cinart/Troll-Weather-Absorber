// =============================================
// ScnMenuStart.js
// Scène du menu principal de démarrage
// =============================================

import Log from '../utils/Logger.js'; 

class ScnMenuStart extends Phaser.Scene {

    constructor() {
        super('ScnMenuStart');
    }

    create() {
        const centerX = 640 / 2;
        const centerY = 480 / 2;

        // Fond
        this.add.rectangle(centerX, centerY, 640, 480, 0x0b0e17);

        // =============================================
        // TITRE
        // =============================================
        this.add.text(centerX, 110, 'TROLL WEATHER', {
            fontSize: '48px',
            fontStyle: 'bold',
            fill: '#4a5bff'
        }).setOrigin(0.5);

        this.add.text(centerX, 160, 'ABSORBER', {
            fontSize: '38px',
            fontStyle: 'bold',
            fill: '#00ffcc'
        }).setOrigin(0.5);

        this.add.text(centerX, 205, 'Little Guy • Big Weather', {
            fontSize: '18px',
            fill: '#aaaaaa'
        }).setOrigin(0.5);

        // =============================================
        // BOUTONS (tes positions conservées)
        // =============================================
        this.createButton(centerX, 250, 'NEW GAME', () => {
            Log.success('→ Lancement du jeu !');
            this.scene.start('ScnLevel1');
        }, true); // grand bouton

        this.createButton(centerX, 295, 'CONTINUE', () => {
            Log.info('→ Continue cliqué (pas encore implémenté)');
            // this.scene.start('ScnLevel1'); // futur
        }, false, true); // grisé

        this.createButton(centerX, 335, 'CONTROLS', () => {
            Log.info('→ Controls cliqué');
            this.scene.start('ScnControls');
        });

        this.createButton(centerX, 375, 'CREDITS', () => {
            Log.info('→ Credits cliqué');
            this.scene.start('ScnCredits');
        });

        this.createButton(centerX, 415, 'INFO', () => {
            Log.info('→ Info cliqué');
            this.scene.start('ScnInfo');
        }, false, false, 0.85);
    }

    createButton(x, y, text, callback, isBig = false, isDisabled = false, scale = 1) {
        const width = isBig ? 280 : 220;
        const height = isBig ? 40 : 30;

        const buttonBg = this.add.rectangle(x, y, width * scale, height * scale, 
            isDisabled ? 0x555555 : 0x1e2a5e)
            .setStrokeStyle(3, isDisabled ? 0x777777 : 0x4a9eff);

        const buttonText = this.add.text(x, y, text, {
            fontSize: isBig ? '22px' : '18px',
            fontStyle: 'bold',
            fill: isDisabled ? '#888888' : '#ffffff'
        }).setOrigin(0.5);

        buttonBg.setInteractive({ useHandCursor: !isDisabled });

        if (!isDisabled) {
            buttonBg.on('pointerover', () => buttonBg.setFillStyle(0x2a3b7a));
            buttonBg.on('pointerout', () => buttonBg.setFillStyle(0x1e2a5e));
            
            buttonBg.on('pointerdown', () => {
                buttonBg.setFillStyle(0x00ffcc);
                this.time.delayedCall(80, () => callback());
            });
        }

        return { bg: buttonBg, text: buttonText };
    }
}

export default ScnMenuStart;