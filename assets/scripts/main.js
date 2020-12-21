import friendlyLinks from './modules/link-friendlyizer'
import toolTips from './modules/tippy'
import setupSearch from "./modules/search"

friendlyLinks()
toolTips()

// We're attaching this to the window so we'll have access to it later
window.setupSearch = setupSearch
