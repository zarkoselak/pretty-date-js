'use strict';

var path = require('path');

module.exports = {
  entry: './example.js',
  output: {
    path: path.join(__dirname, './'),
    filename: 'bundle.js'
  }
};