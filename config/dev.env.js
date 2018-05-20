const merge = require('webpack-merge')
const proEnv = require('../config/prod.env')
module.exports = merge(proEnv, {
    NODE_ENV: '"development"'
})