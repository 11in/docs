module.exports = conf => {
    conf.addPlugin(require('@11ty/eleventy-navigation'))
    conf.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'))
    require('./cloudinary')(conf)
}
