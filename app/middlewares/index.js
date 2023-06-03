import bodyParser from "body-parser";
import cors from "cors";

export const middlewares = [
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
  cors(),
];

export const addMiddlewares = (app) => {
  middlewares.forEach((middleware) => {
    app.use(middleware);
  });
};
