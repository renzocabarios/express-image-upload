import V1 from "./v1/index.js";

export const routes = [
  {
    url: "/api/v1/upload",
    route: V1.uploadRoute,
  },
];

export const addRoutes = (app) => {
  routes.forEach((route) => {
    app.use(route.url, route.route);
  });
};
