import { Request, Response } from "express";

import { ImportCategoryService } from "./ImportCategoryService";

export class ImportCategoryController {
    private importCategoryService: ImportCategoryService;

    constructor(importCategoryService: ImportCategoryService) {
        this.importCategoryService = importCategoryService;
    }

    public handler(req: Request, res: Response): Response {
        const { file } = req;
        console.log(file);
        return res.send();
    }
}
