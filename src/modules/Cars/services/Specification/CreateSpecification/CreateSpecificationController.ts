import { Request, Response } from "express";

import { CreateSpecificationService } from "./CreateSpecificationService";

export class CreateSpecificationController {
    private createSpecificationService: CreateSpecificationService;

    constructor(createSpecificationService: CreateSpecificationService) {
        this.createSpecificationService = createSpecificationService;
    }

    public handle(req: Request, res: Response): Response {
        const { name, description } = req.body;
        const specification = this.createSpecificationService.execute({
            name,
            description,
        });
        return res.status(201).json(specification);
    }
}
