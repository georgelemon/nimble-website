class NimbleApp {

    /**
     * @param  {Object} settings
     */
    constructor(settings = {}) {
        if (settings.enableColorScheme == true)
            this.#enableColorScheme()
        if (settings.enableSpotlightFocus == true)
            this.#enableSpotlightFocus()
    }

    /**
     * Enable Theme switcher
     * @return {Void}
     */
    #enableColorScheme() {
        let themeSwitcher = document.querySelector('.theme-switcher-btn')
        themeSwitcher.addEventListener('click', function(){
            if (localStorage.getItem('theme') == "dark") {
                localStorage.setItem('theme', 'light')
                document.body.classList.remove('dark-theme')
                document.body.classList.add('light-theme')
            } else {
                localStorage.setItem('theme', 'dark')
                document.body.classList.remove('light-theme')
                document.body.classList.add('dark-theme')
            }
        })
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
        enableSpotlightFocus: true,
        enableColorScheme: true
    })
}