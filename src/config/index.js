const DB_CONFIG = {
  DB_NAME: 'node-api',
  DB_USER: 'hoannguyen',
  DB_PASSWORD: '1',
};
const OPTIONS = {
  DB_HOST: 'localhost',
  DB_PORT: 3306,
  DB_DIALECT: 'mysql',
};
const DB_OPTIONS = {
  host: OPTIONS.DB_HOST,
  port: OPTIONS.DB_PORT,
  dialect: OPTIONS.DB_DIALECT,
};
module.exports = { DB_CONFIG, DB_OPTIONS };
