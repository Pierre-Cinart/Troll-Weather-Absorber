// =============================================
// AudioManager.js
// Gestion centralisee de la musique et des effets sonores
// =============================================

import AudioSettings from './AudioSettings.js';

const AudioManager = {

    // =============================================
    // ETAT GLOBAL AUDIO
    // =============================================
    currentMusic: null,
    isAudioUnlocked: false,

    init() {
        // =============================================
        // INITIALISATION
        // Recharge les reglages et reset le flag navigateur.
        // =============================================
        AudioSettings.load();
        this.isAudioUnlocked = false;
    },

    playMusic(scene, key, config = {}) {
        // =============================================
        // EVITE DE RELANCER LA MEME MUSIQUE
        // =============================================
        if (this.currentMusic && this.currentMusic.key === key && this.currentMusic.isPlaying) {
            return this.currentMusic;
        }

        // =============================================
        // STOP DE LA MUSIQUE PRECEDENTE
        // =============================================
        if (this.currentMusic) {
            this.currentMusic.stop();
            this.currentMusic.destroy();
        }

        // =============================================
        // CREATION DE LA NOUVELLE MUSIQUE
        // =============================================
        this.currentMusic = scene.sound.add(key, {
            loop: true,
            ...config,
            volume: AudioSettings.musicVolume
        });

        this.currentMusic.play();
        return this.currentMusic;
    },

    setMusicVolume(value) {
        // =============================================
        // MISE A JOUR DU VOLUME MUSIQUE
        // =============================================
        AudioSettings.musicVolume = value;
        AudioSettings.save();

        if (this.currentMusic) {
            this.currentMusic.setVolume(value);
        }
    },

    playSfx(scene, key, config = {}) {
        // =============================================
        // LECTURE D UN EFFET SONORE
        // =============================================
        scene.sound.play(key, {
            ...config,
            volume: AudioSettings.sfxVolume
        });
    },

    setSfxVolume(value) {
        // =============================================
        // MISE A JOUR DU VOLUME SFX
        // =============================================
        AudioSettings.sfxVolume = value;
        AudioSettings.save();
    }
};

export default AudioManager;
