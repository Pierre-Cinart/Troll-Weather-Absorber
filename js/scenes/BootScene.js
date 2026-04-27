// =============================================
// BootScene.js
// Scène de démarrage / préchargement
// C'est la première scène qui se lance
// =============================================

class BootScene extends Phaser.Scene {

    constructor() {
        super('BootScene');     // Identifiant de la scène, utilisé pour la lancer depuis une autre scène
    }

    preload() {
        // chargement  images, sons, spritesheets ...
        console.log('BootScene → Préchargement des assets...');
        
        // Exemple futur :
        // this.load.image('troll', 'assets/images/troll.png');
    }

    create() {
        console.log('BootScene → Prêt, on passe au jeu !');
        
        // lancement de la scène de jeu
        this.scene.start('GameScene');
    }
}