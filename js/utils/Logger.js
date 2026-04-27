// =============================================
// Logger.js
// Instance globale pour faciliter les logs dans la console
// Avec des styles et des emojis pour rendre ça plus sympa
// =============================================

class Logger {

    constructor() {
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
        const style = this.styles[type] || this.styles.info;
        console.log(`%c${message}`, style + extraStyle);
    }

    success(message) { this.log(`✅ ${message}`, 'success'); }
    error(message)   { this.log(`❌ ${message}`, 'error'); }
    warning(message) { this.log(`⚠️  ${message}`, 'warning'); }
    info(message)    { this.log(`📌 ${message}`, 'info'); }
    debug(message)   { this.log(`🔧 ${message}`, 'debug'); }
    title(message)   { this.log(message, 'title'); }
}

// === CRÉATION DE L'INSTANCE GLOBALE ===
const Log = new Logger();

// export pour pouvoir l'importer partout
export default Log;