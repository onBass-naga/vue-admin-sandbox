'use strict'
const utils = require('./utils')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const path = require('path')

const useMockService = !!(process.env.npm_config_mock)
console.log('use mock services: ' + useMockService)
const mockablePath = useMockService ? 'mockable/mock' : 'mockable/real'

const mockWebpackConfig = merge(baseWebpackConfig, {
  resolve: Object.assign({}, 
    baseWebpackConfig.resolve,
    { alias: { '#mockable#': path.join(__dirname, '..', mockablePath)  }}
  )
})

module.exports = mockWebpackConfig
