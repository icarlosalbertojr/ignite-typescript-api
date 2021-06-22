import { Router, Request, Response } from "express";

import { CategoryRepository } from "../repositories/CategoryRepository";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (req: Request, res: Response) => {
    const { name, description } = req.body;
    const category = categoryRepository.create({ name, description });
    res.json(category).status(201);
});

export { categoriesRoutes };
