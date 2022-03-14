const {Client} = require('pg');
const path = require("path");
require('dotenv').config({path: path.resolve(__dirname, './.env')});

const config = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
}

const database = new Client(config);

database.connect();

module.exports.database = database;


