import { Request, Response } from "express";

import { FindByNameCategoryService } from "./FindByNameCategoryService";

export class FindByNameCategoryController {
    private findByNameCategoryService: FindByNameCategoryService;

    constructor(findByNameCategoryService: FindByNameCategoryService) {
        this.findByNameCategoryService = findByNameCategoryService;
    }

    public handler(req: Request, res: Response): Response {
        const { name } = req.params;
        const category = this.findByNameCategoryService.execute(name);
        if (!category) {
            return res.status(404).json("Category not exists!");
        }
        return res.status(200).json(category);
    }
}
