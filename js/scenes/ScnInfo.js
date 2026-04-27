// =============================================
// ScnInfo.js
// Scène d'information
// =============================================

import Log from '../utils/Logger.js';
import Button from '../ui/Button.js';

class ScnInfo extends Phaser.Scene {

    constructor() {
        super('ScnInfo');
    }

    create() {

        Log.info('ScnInfo chargée');

        const centerX = 640 / 2;
        const centerY = 480 / 2;

        // UI
        const ui = new Button(this);


        // =============================================
        // TEXTE INFO
        // =============================================
        // Titre
        this.add.text(centerX,150, 'Troll Weather Absorber - ',{
            fontSize: '22px',
            fontstyle: 'bold',
            fill: '#00ffcc',
            align: 'center'
        }).setOrigin(0.5);
        // Contenu
        this.add.text(centerX, centerY ,  '\nA tiny goofy troll \nwho absorbs elements to control the weather' 
            +'\nin fast-paced platformer levels.' 
            + '\nMade for a game jam with themes \'Little Guy\' and \'Weather\'', {
            fontSize: '18px',
            fill: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);
        // =============================================
        // BOUTON RETOUR MENU
        // =============================================
        ui.create({
            x: centerX,
            y: 380,
            text: 'BACK',
            width: 220,
            height: 35,
            clickSound: 'clickWater', // si tu veux le son
            callback: () => {
                Log.info('→ Retour menu');
                this.scene.start('ScnMenuStart');
            }
        });
        
    }
    
}

export default ScnInfo;