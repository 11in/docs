module.exports = conf => {
    conf.addFilter('nav_builder', (navigation, url) => {
       return doLine(navigation, url, [])
    })
}

const doLine = (line, url, collection) => {
    let currentParent;
    let thisRow = [];
    line.forEach(item => {
        thisRow.push({
            name: item.title,
            url: item.url,
            level: collection.length,
            parent: item.url !== url // not the current url
                && url.indexOf(item.url) === 0 // ...but begins the current url
                && item.url !== '/', // ...and isn't home, which beings all urls
            current: item.url === url,
        })
        if (url.indexOf(item.url) === 0 && item.children.length > 0) {
            currentParent = item
        }
    })
    collection.push(thisRow)
    if (currentParent) {
        return doLine(currentParent.children, url, collection)
    }
    return collection
}
