import pg from 'pg';
import dotenv from 'dotenv'
dotenv.config({path : 'C:\\Dev\\mariestigen-cv-portfolio\\server\\.env'}) //for dev reasons
const {Client} = pg;

const config = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
}

const database = new Client(config);

database.connect();

export {database};


