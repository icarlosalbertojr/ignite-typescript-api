import { Request, Response, Router } from "express";

import { Specification } from "../modules/Cars/models/Specification";
import { SpecificationRepository } from "../modules/Cars/repositories/Specification/SpecificationRepository";
import { CreateSpecificationService } from "../modules/Cars/services/Specification/CreateSpecificationService";
import { FindByNameSpecificationService } from "../modules/Cars/services/Specification/FindByNameSpecificationService";

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
