import express, { Express } from "express";

import { categoriesRoutes } from "./routes/Categories.routes";

const app: Express = express();
app.use(express.json());
app.use("/categories", categoriesRoutes);
app.listen(3001);
