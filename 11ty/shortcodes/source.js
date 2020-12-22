module.exports = conf => {
    conf.addShortcode('source', (name, type, url) => {
        return `<div class="px-4 py-2 my-4 border-l-8 rounded-md border-green-400 source-block">
<h4 class="mt-0">🔌 This ${type} is provided by <a href="${url}">${name}</a>.</h4>
See the documentation for more information on usage and configuration.
</div>`
    })
}
