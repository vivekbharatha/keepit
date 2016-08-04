var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var env = require('../.env.json');
var config = {
  NODE_ENV: '"development"'
};
for (var key in env) {
  config[key] = '"' + env[key] + '"';
}

module.exports = merge(prodEnv, config);
