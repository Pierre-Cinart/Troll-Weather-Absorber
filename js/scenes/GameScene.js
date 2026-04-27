// =============================================
// GameScene.js
// La scène principale du jeu (où tout se passe)
// =============================================

class GameScene extends Phaser.Scene {

    constructor() {
        super('GameScene');
    }

    preload() {
        // On peut aussi charger des assets ici si on veut qu'ils soient spécifiques à cette scène
        console.log('GameScene → Préchargement...');
    }

    create() {
        console.log('GameScene → Création du niveau !');
        
        // Pour le moment on met juste un texte pour vérifier que tout marche
        this.add.text(320, 240, 'Troll Weather Absorber', {
            fontSize: '28px',
            fill: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);
    }

    update() {
        // Cette fonction est appelée ~60 fois par seconde
        // C'est ici qu'on mettra la logique du troll, inputs, physique, etc.
    }
}