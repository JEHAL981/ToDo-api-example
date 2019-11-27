let env = process.env.NODE_ENV || 'test';
let config = require(`./${env}`);


module.exports = config;
