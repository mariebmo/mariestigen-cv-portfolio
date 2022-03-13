const { database } = require("../database.js");

module.exports = {
  getTypes,
};

async function getTypes(req, res) {
  database.connect();
  /*
                              try {
                                  const result = await dbClient.query('SELECT * FROM experience;')
                                  dbClient.end()
                                  return res.status(200).json(result);
                              } catch (err) {
                                  dbClient.end()
                                  return res.status(500).json({message: err.message ? err.message : "something went wrong"})
                              }
                          
                           */

  database.query("SELECT * FROM experience;", (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    database.end();
  });
}
