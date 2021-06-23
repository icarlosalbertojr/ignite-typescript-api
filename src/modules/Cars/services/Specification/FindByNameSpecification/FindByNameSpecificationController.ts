import { Request, Response } from "express";

import { FindByNameSpecificationService } from "./FindByNameSpecificationService";

export class FindByNameSpecificationController {
    private FindByNameSpecificationService: FindByNameSpecificationService;

    constructor(FinByNameSpecificationService: FindByNameSpecificationService) {
        this.FindByNameSpecificationService = FinByNameSpecificationService;
    }

    public handle(req: Request, res: Response): Response {
        const { name } = req.params;
        const specification = this.FindByNameSpecificationService.execute(name);
        return res.status(200).json(specification);
    }
}
