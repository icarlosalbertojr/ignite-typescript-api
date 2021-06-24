import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/Cars/services/Category/CreateCategory";
import { findAllCategoryController } from "../modules/Cars/services/Category/FindAllCategory";
import { findByNameCategoryController } from "../modules/Cars/services/Category/FindByNameCategory";
import { importCategoryController } from "../modules/Cars/services/Category/ImportCategory";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

categoriesRoutes.post("/", (req, res) =>
    createCategoryController.handler(req, res)
);

categoriesRoutes.get("/", (req, res) =>
    findAllCategoryController.handler(req, res)
);

categoriesRoutes.get("/name/:name", (req, res) =>
    findByNameCategoryController.handler(req, res)
);

categoriesRoutes.post("/import", upload.single("file"), (req, res) =>
    importCategoryController.handler(req, res)
);

export { categoriesRoutes };
