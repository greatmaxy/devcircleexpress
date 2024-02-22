const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'Acer@1189',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'expressdb1'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};