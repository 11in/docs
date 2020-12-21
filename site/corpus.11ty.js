module.exports = class Search {

    data() {
        return {
            permalink: `/search.json`,
            no_sitemap: true,
        }
    }

    makeSearchEntry(entry) {
        // Things not in the sitemap are not searchable
        if (entry.data.no_sitemap) {
            return null;
        }

        if (!entry.data.title) {
            console.log(entry)
        }

        const striptags = require('striptags')
        return {
            title: entry.data.title,
            content: striptags(entry.templateContent, [
                'strong', 'em',
            ]),
            url: entry.url,
        }
    }

    render(data) {
        return JSON.stringify(data.collections.all
            .map(this.makeSearchEntry)
            .filter(entry => null !== entry))
    }
}
