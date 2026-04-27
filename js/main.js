// =============================================
// main.js
// Point d'entrée du jeu 
// =============================================

window.onload = function() {
    
    // création du jeu Phaser avec la configuration définie dans config.js
    const game = new Phaser.Game(config);
    
    console.log('%c🚀 Troll Weather Absorber - Jeu démarré avec succès !', 
                'color: #4a5bff; font-size: 16px; font-weight: bold');
};