import { Router, Request, Response } from "express";

import { CategoryRepository } from "../repositories/CategoryRepository";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (req: Request, res: Response) => {
    const { name, description } = req.body;

    const categoryAlreadyExists = categoryRepository.findByName(name);

    if (categoryAlreadyExists) {
        res.status(400).json({ message: "Category already exists!" });
    }

    const category = categoryRepository.create({ name, description });

    res.status(201).json(category);
});

categoriesRoutes.get("/", (req: Request, res: Response) => {
    const categories = categoryRepository.findAll();

    res.status(200).json(categories);
});

export { categoriesRoutes };
