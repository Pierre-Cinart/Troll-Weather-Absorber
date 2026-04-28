// =============================================
// Logger.js
// Petit helper de logs styles pour le developpement
// =============================================

class Logger {

    constructor() {
        // =============================================
        // STYLES DISPONIBLES
        // Chaque type de log possede sa couleur / son style.
        // =============================================
        this.styles = {
            success: 'color: #00ff88; font-weight: bold;',
            error:   'color: #ff4444; font-weight: bold;',
            warning: 'color: #ffaa00; font-weight: bold;',
            info:    'color: #4a9eff;',
            debug:   'color: #8888ff; font-style: italic;',
            title:   'color: #4a5bff; font-size: 16px; font-weight: bold;'
        };
    }

    log(message, type = 'info', extraStyle = '') {
        // =============================================
        // METHODE GENERIQUE
        // =============================================
        const style = this.styles[type] || this.styles.info;
        console.log(`%c${message}`, style + extraStyle);
    }

    // =============================================
    // RACCOURCIS DE LOGS
    // =============================================
    success(message) { this.log(`[OK] ${message}`, 'success'); }
    error(message)   { this.log(`[ERR] ${message}`, 'error'); }
    warning(message) { this.log(`[WARN] ${message}`, 'warning'); }
    info(message)    { this.log(`[INFO] ${message}`, 'info'); }
    debug(message)   { this.log(`[DEBUG] ${message}`, 'debug'); }
    title(message)   { this.log(message, 'title'); }
}

// =============================================
// INSTANCE GLOBALE
// =============================================
const Log = new Logger();

export default Log;
