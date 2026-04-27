// =============================================
// Button.js
// Classe UI pour créer des boutons réutilisables
// Gère : taille, couleurs, état disabled, callback, son de clic optionnel
// =============================================

import AudioManager from '../config/AudioManager.js';

export default class Button {

    constructor(scene) {
        this.scene = scene;
    }

    create({
        x,
        y,
        text,
        callback,

        width = 220,
        height = 35,
        scale = 1,

        isDisabled = false,

        bgColor = 0x1e2a5e,
        hoverColor = 0x2a3b7a,
        activeColor = 0x00ffcc,
        disabledColor = 0x555555,

        borderSize = 3,
        borderColor = 0x4a9eff,
        borderDisabledColor = 0x777777,

        fontSize = '18px',
        textColor = '#ffffff',
        textDisabledColor = '#888888',

        // Son optionnel au clic
        // Exemple : clickSound: 'uiClick'
        clickSound = null
    }) {

        const scene = this.scene;

        const finalWidth = width * scale;
        const finalHeight = height * scale;

        // =============================================
        // FOND DU BOUTON
        // =============================================
        const bg = scene.add.rectangle(
            x,
            y,
            finalWidth,
            finalHeight,
            isDisabled ? disabledColor : bgColor
        ).setStrokeStyle(
            borderSize,
            isDisabled ? borderDisabledColor : borderColor
        );

        // =============================================
        // TEXTE DU BOUTON
        // =============================================
        const txt = scene.add.text(x, y, text, {
            fontSize: fontSize,
            fontStyle: 'bold',
            fill: isDisabled ? textDisabledColor : textColor
        }).setOrigin(0.5);

        // =============================================
        // INTERACTION
        // =============================================
        bg.setInteractive({
            useHandCursor: !isDisabled
        });

        if (!isDisabled) {

            bg.on('pointerover', () => {
                bg.setFillStyle(hoverColor);
            });

            bg.on('pointerout', () => {
                bg.setFillStyle(bgColor);
            });

            bg.on('pointerdown', () => {
                bg.setFillStyle(activeColor);

                // Son de clic optionnel
                if (clickSound) {
                    AudioManager.playSfx(scene, clickSound);
                }

                scene.time.delayedCall(80, () => {
                    if (callback) {
                        callback();
                    }
                });
            });
        }

        return { bg, text: txt };
    }
}