import { Router, Request, Response } from "express";

import { Category } from "../models/Category";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (req: Request, res: Response) => {
    const { name, description } = req.body;
    const category = new Category();
    Object.assign(category, {
        name,
        description,
        created_at: new Date(),
    });
    categories.push(category);
    res.json(category).status(201);
});

export { categoriesRoutes };
