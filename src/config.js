const env = process.env;

const config = {
  db: { /* details entered here is for demo, configuration of db will replace the values */
    host: env.DB_HOST || 'localhost',
    user: env.DB_USER || 'root',
    password: env.DB_PASSWORD || 'jq88esfx',
    database: env.DB_NAME || 'sys',
    connectionLimit: 10
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};


module.exports = config;