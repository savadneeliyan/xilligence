import Sequelize from "sequelize";
import sanitizedConfig from "../../config.js";

const sequelize = new Sequelize(
  sanitizedConfig.MYSQL_DATA_BASE_NAME,
  sanitizedConfig.MYSQL_USER,
  sanitizedConfig.MYSQL_PASSWORD,
  {
    host: sanitizedConfig.DB_HOST,
    // password: "RaziqLilac@06"
    dialect: "mysql",
    port: sanitizedConfig.PORT,
  }
);

export default sequelize;
