// =============================================
// ScnBoot.js
// Scene de demarrage du jeu
// =============================================

import Log from '../utils/Logger.js';
import AudioSettings from '../config/AudioSettings.js';
import AudioManager from '../config/AudioManager.js';

class ScnBoot extends Phaser.Scene {

    constructor() {
        super('ScnBoot');
    }

    preload() {
        // =============================================
        // LOG DE PRELOAD
        // =============================================
        Log.info('ScnBoot -> Prechargement en cours...');

        // =============================================
        // SONS GLOBAUX
        // Sons utilises dans l UI et partages par plusieurs scenes.
        // =============================================
        this.load.audio('clickWater', 'assets/sounds/sfx/clickWater.mp3');
    }

    create() {
        // =============================================
        // CONFIG AUDIO
        // Charge les volumes sauvegardes et initialise le manager.
        // =============================================
        AudioSettings.load();
        AudioManager.init();

        // =============================================
        // LOGS DE FIN DE BOOT
        // =============================================
        Log.title('ScnBoot terminee');
        Log.success('Config audio chargee');
        Log.info(`Music Volume: ${Math.round(AudioSettings.musicVolume * 100)}%`);
        Log.info(`SFX Volume: ${Math.round(AudioSettings.sfxVolume * 100)}%`);
        Log.info('Passage au menu principal');

        // =============================================
        // TRANSITION DE SCENE
        // =============================================
        this.scene.start('ScnMenuStart');
    }
}

export default ScnBoot;
