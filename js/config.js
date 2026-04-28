// =============================================
// config.js
// Configuration principale du jeu Phaser
// =============================================

const config = {
    // =============================================
    // RENDU GENERAL
    // =============================================
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    parent: 'game-container',
    backgroundColor: '#0b0e17',

    // =============================================
    // PHYSIQUE
    // =============================================
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: false
        }
    },

    // =============================================
    // SCALE
    // =============================================
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    // =============================================
    // SCENES
    // Remplies dans main.js au lancement.
    // =============================================
    scene: []
};

export default config;
