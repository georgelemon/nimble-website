class NimbleApp {

    constructor(settings = {}) {
        if (settings.enableColorScheme == true)
            this.#enableColorScheme()
        if (settings.enableSpotlightFocus == true)
            this.#enableSpotlightFocus()
    }

    #enableColorScheme() {
        // 
    }

    /**
     * Enable focus on spotlight search using slash key `/`
     * @return {Void}
     */
    #enableSpotlightFocus() {
        let spotlight = document.querySelector('.spotlight input')
        if(spotlight) {
            document.addEventListener('keydown', function(e) {
                if(e.keyCode == 191) {
                    if(document.activeElement !== spotlight) {
                        e.preventDefault()
                        spotlight.focus()
                    }
                }
            })
        }
    }
}

/**
 * Initialize JS client of Nimble app
 * @param  {Object} settings
 * @return {Void}
 */
export async function init(settings = {}) {
    new NimbleApp({
        enableSpotlightFocus: true
    })
}