import dotenv from "dotenv";

// Parsing the env file.
// dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config();
// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not setup a .env file at all

// Loading process.env as ENV interface

const getConfig = () => {
  return {
    PORT: process.env.PORT ? process.env.PORT : undefined,
    MYSQL_DATA_BASE_NAME: process.env.MYSQL_DATA_BASE_NAME,
    MYSQL_USER: process.env.MYSQL_USER,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    DB_HOST: process.env.DB_HOST,
  };
};

// Throwing an Error if any field was undefined we don't
// want our app to run if it can't connect to DB and ensure
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type
// definition.

const getSanitzedConfig = (config) => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
