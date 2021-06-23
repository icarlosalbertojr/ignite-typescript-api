import { Router } from "express";

import { createCategoryController } from "../modules/Cars/services/Category/CreateCategory";
import { findAllCategoryController } from "../modules/Cars/services/Category/FindAllCategory";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) =>
    createCategoryController.handler(req, res)
);
categoriesRoutes.get("/", (req, res) =>
    findAllCategoryController.handler(req, res)
);

export { categoriesRoutes };
