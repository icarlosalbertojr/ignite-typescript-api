import { Request, Response, Router } from "express";

import { Specification } from "../modules/Specification/models/Specification";
import { SpecificationRepository } from "../modules/Specification/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/Specification/services/CreateSpecificationService";
import { FindByNameSpecificationService } from "../modules/Specification/services/FindByNameSpecificationService";

const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationRoutes.post("/", (req: Request, res: Response) => {
    const { name, description } = req.body;
    const findByNameSpecificationService = new FindByNameSpecificationService(
        specificationRepository
    );
    const createSpecificationService = new CreateSpecificationService(
        specificationRepository,
        findByNameSpecificationService
    );
    const specification: Specification = createSpecificationService.execute({
        name,
        description,
    });
    res.status(201).json(specification);
});

export { specificationRoutes };
