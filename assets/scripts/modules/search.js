import Fuse from 'fuse.js'

function setupSearch(field) {
    const options = {
        keys: [
            'title',
            'content',
        ]
    }

    fetch('/search.json')
        .then(response => response.json())
        .then(data => {
            const fuse = new Fuse(data, options)

            field.search = (term) => {
                if (null === term || '' === term) {
                    return [];
                }

                const results = fuse.search(term);

                return results.map(result => {
                    if (!result) return result

                    const {item: {content}} = result

                    // only works if the content is a string
                    if ('string' !== typeof content) return result

                    let trimmed = content.split(' ').slice(0, 20).join(' ')

                    if (trimmed.length < content.length) {
                        trimmed = `${trimmed}...`
                    }

                    result.item.content = trimmed

                    return result
                })
            }
        })
}

export default setupSearch
