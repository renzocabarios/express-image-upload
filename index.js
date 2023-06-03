import express from "express";
import connectDB from "./app/db/index.js";
import ENV from "./app/env/index.js";
import { addRoutes } from "./app/routes/index.js";
import { addMiddlewares } from "./app/middlewares/index.js";
import fs from "fs";

const app = express();

addMiddlewares(app);
addRoutes(app);

//initialization
const start = () => {
  fs.mkdirSync("./uploads", { recursive: true });
  connectDB(ENV.MONGO_CON).then(() => {
    console.log(`Database connected to ${ENV.MONGO_CON}`);

    app.listen(ENV.PORT, () => {
      console.log(`Server started on port ${ENV.PORT}`);
    });
  });
};

start();
