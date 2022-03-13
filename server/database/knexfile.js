module.exports = {
  development: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: "/database/cv.db3",
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run("PRAGMA foreign_keys = ON", done)
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrate: {
      tableName: 'knex_migrations',
      directory: '../database/migrations',
    }
  }
}