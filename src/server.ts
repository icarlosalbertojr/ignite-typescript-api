import express, { Express } from "express";

import { categoriesRoutes } from "./routes/Categories.routes";
import { specificationRoutes } from "./routes/Specification.routes";

const app: Express = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specification", specificationRoutes);

app.listen(3001);
