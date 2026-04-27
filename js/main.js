// =============================================
// main.js
// Point d'entrée du jeu - Mode Module
// =============================================

import config from './config.js';
import Log from './utils/Logger.js';

// Import de TOUTES les scènes
import ScnBoot from './scenes/ScnBoot.js';
import ScnMenuStart from './scenes/ScnMenuStart.js';
import ScnLevel1 from './scenes/ScnLevel1.js';
import ScnControls from './scenes/ScnControls.js';
import ScnInfo from './scenes/ScnInfo.js';
import ScnCredits from './scenes/ScnCredits.js';

window.onload = function() {
    
    // Liste complète des scènes
    config.scene = [ScnBoot, ScnMenuStart, ScnLevel1, ScnControls, ScnInfo, ScnCredits];

    const game = new Phaser.Game(config);
    
    Log.title('🚀 Troll Weather Absorber - Jeu démarré avec succès !');
    Log.success('Configuration Phaser chargée');
    Log.info('Mode développement - Branche dev');
};