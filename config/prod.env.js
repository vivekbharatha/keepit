var env = require('../.env.json');

var config = {
  NODE_ENV: '"production"'
}
for (var key in env) {
  config[key] = '"' + env[key] + '"';
}

module.exports = config;
