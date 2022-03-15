import pg from 'pg';
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


