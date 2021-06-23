import { Request, Response, Router } from "express";

import { createCategoryController } from "../modules/Cars/services/Category/CreateCategory";

const specificationRoutes = Router();

specificationRoutes.post("/", (req: Request, res: Response) =>
    createCategoryController.handler(req, res)
);

export { specificationRoutes };
