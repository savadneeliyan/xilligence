import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import loginRoute from "./src/router/loginRoute.js";
import sanitizedConfig from "./config.js";
import sequelize from "./src/config/sequelize.js";
import http from "http";

dotenv.config();

const app = express();
const server = http.createServer(app);
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api/login", loginRoute);


sequelize
  .sync()
  .then(() => {
    server.listen(port, () =>
      console.log(
        `🟢 Server running in ${sanitizedConfig.NODE_ENV} mode on port ${port}`
      )
    );
  })
  .catch((error) => console.log(`error ${error}`));
