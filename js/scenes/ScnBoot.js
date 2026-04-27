// =============================================
// ScnBoot.js
// Scène de démarrage (Boot)
// =============================================

import Log from '../utils/Logger.js'; 

class ScnBoot extends Phaser.Scene {

    constructor() {
        super('ScnBoot');
    }

    preload() {
        console.log('ScnBoot → Préchargement des assets communs...');
        Log.info('ScnBoot → Préchargement en cours...');
        
        // Ici tu pourras charger plus tard les assets communs (troll, etc.)
    }

    create() {
        Log.title('ScnBoot terminée');
        Log.success('Assets communs chargés');
        Log.info('Passage au Menu Principal');

        // On va vers le menu (comme tu veux)
        this.scene.start('ScnMenuStart');
    }
}

export default ScnBoot;