// =============================================
// ScnLevel1.js
// Premier niveau de test
// =============================================

import Log from '../utils/Logger.js';

class ScnLevel1 extends Phaser.Scene {

    constructor() {
        super('ScnLevel1');
    }

    preload() {
        // =============================================
        // PRELOAD DU NIVEAU
        // Reserve pour les futurs assets gameplay.
        // =============================================
        Log.info('ScnLevel1 -> Prechargement du niveau 1...');
    }

    create() {
        // =============================================
        // LOG DE CREATE
        // =============================================
        Log.info('ScnLevel1 -> Creation du niveau');

        // =============================================
        // SETUP GENERAL
        // =============================================
        const centerX = 640 / 2;
        const centerY = 480 / 2;

        // =============================================
        // FOND
        // =============================================
        this.add.rectangle(centerX, centerY, 640, 480, 0x0b0e17);

        // =============================================
        // TEXTE PRINCIPAL
        // =============================================
        this.add.text(centerX, centerY, 'Hello my Troll !', {
            fontSize: '42px',
            fontStyle: 'bold',
            fill: '#00ffcc',
            align: 'center'
        }).setOrigin(0.5);

        // =============================================
        // SOUS-TEXTE
        // =============================================
        this.add.text(centerX, centerY + 70, 'Bienvenue dans ScnLevel1', {
            fontSize: '20px',
            fill: '#aaaaaa'
        }).setOrigin(0.5);
    }

    update() {
        // =============================================
        // UPDATE NIVEAU
        // Reserve pour la logique gameplay.
        // =============================================
    }
}

export default ScnLevel1;
