const knex = require('knex');
const config = require('../knexfile');

//saying use testing or dev environemnt file;  should look like this
const dbEnv = process.env.DB_ENV || 'development';

module.exports = knex(config[dbEnv]);