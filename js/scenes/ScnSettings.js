// =============================================
// ScnSettings.js
// Scène de réglage des volumes (Music + SFX)
// =============================================

import Log from '../utils/Logger.js';
import Button from '../ui/Button.js';
import AudioSettings from '../config/AudioSettings.js';
import AudioManager from '../config/AudioManager.js';

class ScnSettings extends Phaser.Scene {

    constructor() {
        super('ScnSettings');
    }

    create() {

        // =============================================
        // SETUP BASIQUE
        // =============================================
        const centerX = 640 / 2;
        const centerY = 480 / 2;
        // UI
        const ui = new Button(this);

        // Charge les valeurs sauvegardées
        AudioSettings.load();

        // =============================================
        // FOND
        // =============================================
        this.add.rectangle(centerX, centerY, 640, 480, 0x0b0e17);

        // =============================================
        // TITRE
        // =============================================
        this.add.text(centerX, 70, 'SETTINGS', {
            fontSize: '42px',
            fontStyle: 'bold',
            fill: '#00ffcc'
        }).setOrigin(0.5);

        // =============================================
        // SLIDER MUSIC
        // =============================================
        this.add.text(170, 180, 'MUSIC', {
            fontSize: '22px',
            fontStyle: 'bold',
            fill: '#ffffff'
        }).setOrigin(0.5);

        this.musicValueText = this.add.text(
            485,
            180,
            `${Math.round(AudioSettings.musicVolume * 100)}%`,
            {
                fontSize: '18px',
                fill: '#00ffcc'
            }
        ).setOrigin(0.5);

        this.createSlider({
            x: centerX,
            y: 180,
            width: 220,
            value: AudioSettings.musicVolume,

            onChange: (value) => {
                // Change le volume en direct + sauvegarde
                AudioManager.setMusicVolume(value);

                // Met à jour le texte
                this.musicValueText.setText(`${Math.round(value * 100)}%`);

                Log.info(`Music volume : ${Math.round(value * 100)}%`);
            }
        });

        // =============================================
        // SLIDER SFX
        // =============================================
        this.add.text(170, 250, 'SFX', {
            fontSize: '22px',
            fontStyle: 'bold',
            fill: '#ffffff'
        }).setOrigin(0.5);

        this.sfxValueText = this.add.text(
            485,
            250,
            `${Math.round(AudioSettings.sfxVolume * 100)}%`,
            {
                fontSize: '18px',
                fill: '#00ffcc'
            }
        ).setOrigin(0.5);

        this.createSlider({
            x: centerX,
            y: 250,
            width: 220,
            value: AudioSettings.sfxVolume,

            onChange: (value) => {
                // Change le volume SFX global + sauvegarde
                AudioManager.setSfxVolume(value);

                // Met à jour le texte
                this.sfxValueText.setText(`${Math.round(value * 100)}%`);

                Log.info(`SFX volume : ${Math.round(value * 100)}%`);
            }
        });

        // =============================================
        // BOUTON RETOUR MENU
        // =============================================
        ui.create({
            x: centerX,
            y: 380,
            text: 'BACK',
            width: 220,
            height: 35,
            clickSound: 'clickWater',
            callback: () => {
                Log.info('→ Retour menu');
                this.scene.start('ScnMenuStart');
            }
        });
    }

    // =============================================
    // FONCTION SLIDER RÉUTILISABLE
    // value doit être entre 0 et 1
    // =============================================
    createSlider({ x, y, width, value, onChange }) {

        // =============================================
        // DIMENSIONS DU SLIDER
        // =============================================
        const barHeight = 8;
        const knobRadius = 12;

        // Limites gauche/droite
        const startX = x - width / 2;
        const endX = x + width / 2;

        // Sécurité : force la valeur entre 0 et 1
        value = Phaser.Math.Clamp(value, 0, 1);

        // =============================================
        // BARRE DE FOND
        // =============================================
        const barBg = this.add.rectangle(
            x,
            y,
            width,
            barHeight,
            0x333333
        );

        // =============================================
        // BARRE REMPLIE
        // =============================================
        const barFill = this.add.rectangle(
            startX,
            y,
            width * value,
            barHeight,
            0x00ffcc
        ).setOrigin(0, 0.5);

        // =============================================
        // BOUTON ROND DU SLIDER
        // =============================================
        const knob = this.add.circle(
            startX + width * value,
            y,
            knobRadius,
            0xffffff
        );

        knob.setStrokeStyle(3, 0x00ffcc);

        // =============================================
        // FONCTION INTERNE POUR APPLIQUER UNE VALEUR
        // =============================================
        const updateSlider = (pointerX) => {
            const clampedX = Phaser.Math.Clamp(pointerX, startX, endX);
            const newValue = Phaser.Math.Clamp((clampedX - startX) / width, 0, 1);

            knob.x = clampedX;
            barFill.width = width * newValue;

            if (onChange) {
                onChange(newValue);
            }
        };

        // =============================================
        // DRAG DU BOUTON
        // =============================================
        knob.setInteractive({
            draggable: true,
            useHandCursor: true
        });

        this.input.setDraggable(knob);

        knob.on('drag', (pointer, dragX) => {
            updateSlider(dragX);
        });

        // =============================================
        // CLIC DIRECT SUR LA BARRE
        // =============================================
        barBg.setInteractive({
            useHandCursor: true
        });

        barBg.on('pointerdown', (pointer) => {
            updateSlider(pointer.x);
        });

        return {
            barBg,
            barFill,
            knob
        };
    }
}

export default ScnSettings;