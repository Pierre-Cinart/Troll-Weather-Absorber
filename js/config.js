// =============================================
// config.js
// Configuration principale du jeu Phaser
//  paramètres de base du jeu :
// =============================================

const config = {
    
    //  AUTO =  WebGL ou Canvas selon le navigateur
    type: Phaser.AUTO,
    
    // Dimension ecran
    width: 640,
    height: 480,
    
    // div du html pour inserer le jeu
    parent: 'game-container',
    
    
    backgroundColor: '#0b0e17',
    
    // Config  physique
    physics: {
        default: 'arcade',           // Le système le plus simple et rapide pour plateforme
        arcade: {
            gravity: { y: 800 },     // Gravité verticale (à ajuster au feeling)
            debug: false             // Mets true si tu veux voir les hitboxes pendant le dev
        }
    },
    
    // Config du scaling de l écran
    scale: {
        mode: Phaser.Scale.FIT,           //  ratio de l'image
        autoCenter: Phaser.Scale.CENTER_BOTH   // Centre le jeu sur l'écran
    },
    
    // Liste des scènes du jeu (dans l'ordre de chargement)
    scene: [BootScene, GameScene]
};