import express, { Express } from "express";
import swaggerUI from "swagger-ui-express";

import { routes } from "./routes";
import swaggerFile from "./swagger.json";
import "./database";

const app: Express = express();

app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use(routes);

app.listen(3001);
