import { Request, Response, Router } from "express";

import { CategoryRepository } from "../modules/Category/repositories/CategoryRepository";
import { CreateCategoryService } from "../modules/Category/services/CreateCategoryService";
import { FindAllCategoryService } from "../modules/Category/services/FindAllCategoryService";
import { FindByNameCategoryService } from "../modules/Category/services/FindByNameCategoryService";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (req: Request, res: Response) => {
    const { name, description } = req.body;
    const findByNameCategoryService = new FindByNameCategoryService(
        categoryRepository
    );
    const createCategoryService = new CreateCategoryService(
        categoryRepository,
        findByNameCategoryService
    );
    const category = createCategoryService.execute({ name, description });
    res.status(201).json(category);
});

categoriesRoutes.get("/", (req: Request, res: Response) => {
    const findAllCategoryService = new FindAllCategoryService(
        categoryRepository
    );
    const categories = findAllCategoryService.execute();
    res.status(200).json(categories);
});

export { categoriesRoutes };
