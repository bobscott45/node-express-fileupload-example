const path = require('path');
const multer = require('multer');

const upload =  multer({dest: 'uploads/'});

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/',
    },
}