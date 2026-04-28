// =============================================
// AudioSettings.js
// Reglages globaux audio sauvegardes en localStorage
// =============================================

const AudioSettings = {
    // =============================================
    // VALEURS PAR DEFAUT
    // =============================================
    musicVolume: 0.5,
    sfxVolume: 0.7,

    load() {
        // =============================================
        // LECTURE DES VALEURS SAUVEGARDEES
        // =============================================
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
        // =============================================
        // SAUVEGARDE DES VALEURS EN LOCAL
        // =============================================
        localStorage.setItem('musicVolume', this.musicVolume);
        localStorage.setItem('sfxVolume', this.sfxVolume);
    }
};

export default AudioSettings;
