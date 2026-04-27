import AudioSettings from './AudioSettings.js';

const AudioManager = {

    currentMusic: null,
    isAudioUnlocked: false, // 👈 AJOUT

    init() {
        AudioSettings.load();

        this.isAudioUnlocked = false; // 👈 RESET à chaque lancement
    },

    playMusic(scene, key, config = {}) {
        if (this.currentMusic && this.currentMusic.key === key && this.currentMusic.isPlaying) {
            return this.currentMusic;
        }

        if (this.currentMusic) {
            this.currentMusic.stop();
            this.currentMusic.destroy();
        }

        this.currentMusic = scene.sound.add(key, {
            loop: true,
            ...config,
            volume: AudioSettings.musicVolume
        });

        this.currentMusic.play();

        return this.currentMusic;
    },

    setMusicVolume(value) {
        AudioSettings.musicVolume = value;
        AudioSettings.save();

        if (this.currentMusic) {
            this.currentMusic.setVolume(value);
        }
    },

    playSfx(scene, key, config = {}) {
        scene.sound.play(key, {
            ...config,
            volume: AudioSettings.sfxVolume
        });
    },

    setSfxVolume(value) {
        AudioSettings.sfxVolume = value;
        AudioSettings.save();
    }
};

export default AudioManager;