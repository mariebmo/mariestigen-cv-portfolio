const {Client} = require('pg');
const path = require("path");
require('dotenv').config({path: path.resolve(__dirname, './.env')});

const theconfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
}

console.log(theconfig)
const database = new Client(theconfig);
console.log(theconfig)

console.log("DETTE ER ENV LOGGEN: " + process.env.DATABASE_URL)
module.exports.database = database;


