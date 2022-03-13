import Hapi from "@hapi/hapi";
import routes from "./routes.js";

/**
 * It creates a new Hapi server, sets its port and host, and starts the server
 */
const init = async () => {
  const server = Hapi.server({
    port: 8000,
    host: "localhost",
  });

  /* Registering the routes with the server. */
  server.route(routes);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

/* A way to handle errors that are not handled by any other error handler. */
process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
