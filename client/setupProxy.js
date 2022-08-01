const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://cv-millie-server.herokuapp.com/",
      changeOrigin: true,
    })
  );
};
