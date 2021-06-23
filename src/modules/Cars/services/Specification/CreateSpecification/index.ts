import { SpecificationRepository } from "../../../repositories/Specification/SpecificationRepository";
import { FindByNameSpecificationService } from "../FindByNameSpecification/FindByNameSpecificationService";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationService } from "./CreateSpecificationService";

const specificationRepository = SpecificationRepository.getInstance();

const findByNameSpecificationSevice = new FindByNameSpecificationService(
    specificationRepository
);

const createSpecificationSevice = new CreateSpecificationService(
    specificationRepository,
    findByNameSpecificationSevice
);

export const createSpecificationController = new CreateSpecificationController(
    createSpecificationSevice
);
