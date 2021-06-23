import { Request, Response } from "express";

import { FindAllCategoryService } from "./FindAllCategoryService";

export class FindAllCategoryController {
    private findAllCategoryService: FindAllCategoryService;

    constructor(findAllCategoryController: FindAllCategoryService) {
        this.findAllCategoryService = findAllCategoryController;
    }

    public handler(req: Request, res: Response): Response {
        const categories = this.findAllCategoryService.execute();
        return res.status(200).json(categories);
    }
}
