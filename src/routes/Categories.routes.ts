import { Request, Response, Router } from "express";

import { CategoryRepository } from "../repositories/CategoryRepository";
import { CreateCategoryService } from "../services/Category/CreateCategoryService";
import { FindAllCategoryService } from "../services/Category/FindAllCategoryService";
import { FindByNameCategoryService } from "../services/Category/FindByNameCategoryService";

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
