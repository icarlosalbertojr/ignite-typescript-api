import { Router } from "express";

import { createCategoryController } from "../modules/Cars/services/Category/CreateCategory";
import { findAllCategoryController } from "../modules/Cars/services/Category/FindAllCategory";
import { findByNameCategoryController } from "../modules/Cars/services/Category/FindByNameCategory";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) =>
    createCategoryController.handler(req, res)
);

categoriesRoutes.get("/", (req, res) =>
    findAllCategoryController.handler(req, res)
);

categoriesRoutes.get("/name/:name", (req, res) =>
    findByNameCategoryController.handler(req, res)
);

export { categoriesRoutes };
