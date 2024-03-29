const env = process.env;

const config = {
  db: { /* details entered here is for demo, configuration of db will replace the values */
    host: env.DB_HOST || 'localhost',
    user: env.DB_USER || 'root',
    password: env.DB_PASSWORD || '********',
    database: env.DB_NAME || 'sys'
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};


module.exports = config;
