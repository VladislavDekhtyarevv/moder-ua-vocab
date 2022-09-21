const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        allowedHosts: 'all',
    },
    pwa: {
        workboxOptions:{
            exclude: [/.htaccess/],
        }
    }
})
