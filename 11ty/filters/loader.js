module.exports = conf => {
    require('./markdown')(conf)
    require('./navBuilder')(conf)
}
