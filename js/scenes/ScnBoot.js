// =============================================
// ScnBoot.js
// Scène de démarrage (Boot)
// =============================================

import Log from '../utils/Logger.js';
import AudioSettings from '../config/AudioSettings.js';
import AudioManager from '../config/AudioManager.js';

class ScnBoot extends Phaser.Scene {

    constructor() {
        super('ScnBoot');
    }

    preload() {
        Log.info('ScnBoot → Préchargement en cours...');

        // =============================================
        // SONS GLOBAUX (UI / SFX)
        // =============================================
        this.load.audio('clickWater', 'assets/sounds/sfx/clickWater.mp3');
    }

    create() {

        // =============================================
        // INITIALISATION CONFIG AUDIO
        // =============================================
        AudioSettings.load();
        AudioManager.init();

        Log.title('ScnBoot terminée');
        Log.success('Config audio chargée');
        Log.info(`Music Volume: ${Math.round(AudioSettings.musicVolume * 100)}%`);
        Log.info(`SFX Volume: ${Math.round(AudioSettings.sfxVolume * 100)}%`);

        Log.info('Passage au Menu Principal');

        this.scene.start('ScnMenuStart');
    }
}

export default ScnBoot;