const { Module, LibManifestPlugin } = require("webpack");

const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js'
    }
}