const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "local",
  password: "postgres",
  port: 5432,
  ssl: process.env.PGSS ? true : false,
});

module.exports = {
  pool,
};
