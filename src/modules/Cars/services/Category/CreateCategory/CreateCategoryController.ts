import { Request, Response } from "express";

import { CreateCategoryService } from "./CreateCategoryService";

export class CreateCategoryController {
    private createCategoryService: CreateCategoryService;

    constructor(createCategoryService: CreateCategoryService) {
        this.createCategoryService = createCategoryService;
    }

    public handler(req: Request, res: Response): Response {
        const { name, description } = req.body;
        const category = this.createCategoryService.execute({
            name,
            description,
        });
        return res.status(201).json(category);
    }
}
