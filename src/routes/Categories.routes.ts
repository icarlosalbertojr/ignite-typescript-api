import { Router } from "express";

import { createCategoryController } from "../modules/Cars/services/Category/CreateCategory";
import { findAllCategoryController } from "../modules/Cars/services/Category/FindAllCategory";

const categoriesRoutes = Router();

categoriesRoutes.post("/", createCategoryController.handler);
categoriesRoutes.get("/", findAllCategoryController.handler);

export { categoriesRoutes };
