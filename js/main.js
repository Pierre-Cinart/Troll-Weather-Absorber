// =============================================
// main.js
// Point d entree principal du jeu
// =============================================

import config from './config.js';
import Log from './utils/Logger.js';

// =============================================
// IMPORT DES SCENES
// =============================================
import ScnBoot from './scenes/ScnBoot.js';
import ScnMenuStart from './scenes/ScnMenuStart.js';
import ScnLevel1 from './scenes/ScnLevel1.js';
import ScnControls from './scenes/ScnControls.js';
import ScnInfo from './scenes/ScnInfo.js';
import ScnCredits from './scenes/ScnCredits.js';
import ScnSettings from './scenes/ScnSettings.js';

// =============================================
// LANCEMENT DU JEU
// =============================================
window.onload = function () {

    // =============================================
    // ORDRE DES SCENES
    // =============================================
    config.scene = [
        ScnBoot,
        ScnMenuStart,
        ScnSettings,
        ScnLevel1,
        ScnControls,
        ScnInfo,
        ScnCredits
    ];

    // =============================================
    // CREATION DE L INSTANCE PHASER
    // =============================================
    const game = new Phaser.Game(config);

    // =============================================
    // LOGS DE DEMARRAGE
    // =============================================
    Log.title('Troll Weather Absorber - Jeu demarre avec succes !');
    Log.success('Configuration Phaser chargee');
    Log.info('Mode developpement - branche dev');
};
