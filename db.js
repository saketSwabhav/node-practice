import { Sequelize } from "sequelize";
import dbConfig from "./config/db.config";
import { isDev } from "./config/env.config";


// const sequelize = new Sequelize('postgres://root:root@localhost:5432/node-js')
// const sequelize = new Sequelize('node-js', 'root', 'root', {
//     host: 'localhost',
//     dialect: 'postgres'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
//   });

const { database, username, password, dialect, host } = dbConfig;

const sequelize = new Sequelize(
  database,
  username,
  password,
  {
    dialect,
    host,
    logging: !isDev,
  }
);

export default sequelize;