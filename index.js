const express = require("express");
const { router } = require("./src/Router/router");
const cors = require("cors");
const { logger } = require("./src/Log/pino");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
require("./src/connection");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "To-Do API",
      version: "1.0.0",
      description: "Simple express to-do-list API",
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
    ],
  },
  apis: ["./src/Router/*js"],
};

const specs = swaggerJsDoc(options);

const app = express();

app.use("/swagger", swaggerUI.serve, swaggerUI.setup(specs));

app.use(cors());
app.use(express.json());
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`listening on port - ${port}`);
});
