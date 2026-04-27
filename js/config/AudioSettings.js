// =============================================
// AudioSettings.js
// Configuration globale des volumes du jeu
// =============================================

const AudioSettings = {
    musicVolume: 0.5,
    sfxVolume: 0.7,

    load() {
        const savedMusic = localStorage.getItem('musicVolume');
        const savedSfx = localStorage.getItem('sfxVolume');

        if (savedMusic !== null) {
            this.musicVolume = parseFloat(savedMusic);
        }

        if (savedSfx !== null) {
            this.sfxVolume = parseFloat(savedSfx);
        }
    },

    save() {
        localStorage.setItem('musicVolume', this.musicVolume);
        localStorage.setItem('sfxVolume', this.sfxVolume);
    }
};

export default AudioSettings;