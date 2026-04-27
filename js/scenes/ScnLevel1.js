import Log from '../utils/Logger.js'; 

// =============================================
// ScnLevel1.js
// Premier niveau de test
// =============================================

class ScnLevel1 extends Phaser.Scene {

    constructor() {
        super('ScnLevel1');
    }

    preload() {
        console.log('ScnLevel1 → Préchargement du niveau 1...');
        // reservé aux chargements des assets du troll, orbes, etc.
    }

    create() {
        console.log('ScnLevel1 → Création du niveau !');

        const centerX = 640 / 2;
        const centerY = 480 / 2;

        // Fond sombre
        this.add.rectangle(centerX, centerY, 640, 480, 0x0b0e17);

        // Texte centré "Hello my Troll"
        this.add.text(centerX, centerY, 'Hello my Troll ! 🧌', {
            fontSize: '42px',
            fontStyle: 'bold',
            fill: '#00ffcc',
            align: 'center'
        }).setOrigin(0.5);

        // Petit texte en dessous
        this.add.text(centerX, centerY + 70, 'Bienvenue dans ScnLevel1', {
            fontSize: '20px',
            fill: '#aaaaaa'
        }).setOrigin(0.5);
    }

    update() {
       
    }
}

// Export pour le mode module
export default ScnLevel1;