// =============================================
// main.js
// Point d'entrée du jeu - Mode Module
// =============================================

import config from './config.js';
import Log from './utils/Logger.js';

// =============================================
// IMPORT DES SCÈNES
// =============================================
import ScnBoot from './scenes/ScnBoot.js';
import ScnMenuStart from './scenes/ScnMenuStart.js';
import ScnLevel1 from './scenes/ScnLevel1.js';
import ScnControls from './scenes/ScnControls.js';
import ScnInfo from './scenes/ScnInfo.js';
import ScnCredits from './scenes/ScnCredits.js';
import ScnSettings from './scenes/ScnSettings.js'; // ✅ AJOUT

// =============================================
// LANCEMENT DU JEU
// =============================================
window.onload = function () {

    // Ordre des scènes (important pour debug)
    config.scene = [
        ScnBoot,
        ScnMenuStart,
        ScnSettings,   // ✅ AJOUT
        ScnLevel1,
        ScnControls,
        ScnInfo,
        ScnCredits
    ];

    const game = new Phaser.Game(config);

    Log.title('🚀 Troll Weather Absorber - Jeu démarré avec succès !');
    Log.success('Configuration Phaser chargée');
    Log.info('Mode développement - Branche dev');
};