module.exports = conf => {
    conf.addFilter('nav_active', (entry, url, classes) => {
        const {active: a, current: c, parent: p} = Object.assign({
            active: 'active',
            current: 'current',
            parent: 'parent',
        }, classes)

        if (entry.url === url) {
            return `${a} ${c}`
        }

        const {children} = entry
        const parent = children.reduce((carry, current) => {
           if (true === carry) return true
           return current.url === url 
        }, false)

        if (parent) {
            return `${a} ${p}`
        }

        return ``
    })
}