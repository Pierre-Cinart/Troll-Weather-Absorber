// =============================================
// ScnMenuStart.js
// Menu principal du jeu
// =============================================

import Log from '../utils/Logger.js';
import Button from '../ui/Button.js';
import AudioSettings from '../config/AudioSettings.js';
import AudioManager from '../config/AudioManager.js';

class ScnMenuStart extends Phaser.Scene {

    constructor() {
        super('ScnMenuStart');
    }

    preload() {
        // =============================================
        // MUSIQUE DU MENU
        // =============================================
        this.load.audio('menuMusic', 'assets/sounds/musics/menu.mp3');
    }

    create() {
        // =============================================
        // SETUP GENERAL
        // =============================================
        const centerX = 640 / 2;
        const centerY = 480 / 2;
        const ui = new Button(this);

        AudioSettings.load();

        // =============================================
        // MUSIQUE
        // =============================================
        this.menuMusic = AudioManager.playMusic(this, 'menuMusic');

        // =============================================
        // FOND
        // =============================================
        this.add.rectangle(centerX, centerY, 640, 480, 0x0b0e17);

        // =============================================
        // TITRE
        // =============================================
        this.add.text(centerX, 75, 'TROLL WEATHER', {
            fontSize: '48px',
            fontStyle: 'bold',
            fill: '#4a5bff'
        }).setOrigin(0.5);

        this.add.text(centerX, 125, 'ABSORBER', {
            fontSize: '38px',
            fontStyle: 'bold',
            fill: '#00ffcc'
        }).setOrigin(0.5);

        this.add.text(centerX, 168, 'Little Guy • Big Weather', {
            fontSize: '18px',
            fill: '#aaaaaa'
        }).setOrigin(0.5);

        // =============================================
        // BOUTONS PRINCIPAUX
        // =============================================
        ui.create({
            x: centerX,
            y: 220,
            text: 'NEW GAME',
            width: 280,
            height: 40,
            fontSize: '22px',
            clickSound: 'clickWater',
            callback: () => {
                Log.success('-> Lancement du jeu !');
                this.scene.start('ScnLevel1');
            }
        });

        ui.create({
            x: centerX,
            y: 265,
            text: 'CONTINUE',
            isDisabled: true
        });

        ui.create({
            x: centerX,
            y: 305,
            text: 'CONTROLS',
            clickSound: 'clickWater',
            callback: () => {
                this.scene.start('ScnControls');
            }
        });

        ui.create({
            x: centerX,
            y: 345,
            text: 'CREDITS',
            clickSound: 'clickWater',
            callback: () => {
                this.scene.start('ScnCredits');
            }
        });

        ui.create({
            x: centerX,
            y: 385,
            text: 'SETTINGS',
            clickSound: 'clickWater',
            callback: () => {
                this.scene.start('ScnSettings');
            }
        });

        ui.create({
            x: centerX,
            y: 425,
            text: 'INFO',
            width: 190,
            clickSound: 'clickWater',
            callback: () => {
                this.scene.start('ScnInfo');
            }
        });

        // =============================================
        // OVERLAY DE DEBLOCAGE AUDIO
        // Le navigateur exige une interaction utilisateur
        // avant de lancer certains sons.
        // =============================================
        if (!AudioManager.isAudioUnlocked) {
            this.createAudioUnlockOverlay(centerX, centerY);
        }
    }

    createAudioUnlockOverlay(centerX, centerY) {
        // =============================================
        // ETAT LOCAL
        // =============================================
        let unlocked = false;

        // =============================================
        // FOND OVERLAY
        // =============================================
        const overlay = this.add.rectangle(
            centerX,
            centerY,
            640,
            480,
            0x000000,
            0.65
        )
        .setDepth(1000)
        .setInteractive();

        // =============================================
        // TEXTE OVERLAY
        // =============================================
        const text = this.add.text(centerX, centerY, 'PRESS ANY BUTTON', {
            fontSize: '28px',
            fill: '#ffffff'
        }).setOrigin(0.5).setDepth(1001);

        // =============================================
        // DEBLOCAGE AUDIO
        // =============================================
        const unlock = () => {
            if (unlocked) return;
            unlocked = true;

            AudioManager.isAudioUnlocked = true;

            if (AudioManager.currentMusic && !AudioManager.currentMusic.isPlaying) {
                AudioManager.currentMusic.play();
            }

            this.tweens.add({
                targets: [overlay, text],
                alpha: 0,
                duration: 300,
                onComplete: () => {
                    overlay.destroy();
                    text.destroy();
                }
            });
        };

        overlay.once('pointerdown', unlock);
        this.input.keyboard.once('keydown', unlock);
    }
}

export default ScnMenuStart;
