import { Router } from "express";

import { categoriesRoutes } from "./Categories.routes";
import { specificationRoutes } from "./Specification.routes";

const routes = Router();

routes.use("/categories", categoriesRoutes);
routes.use("/specification", specificationRoutes);

export { routes };
