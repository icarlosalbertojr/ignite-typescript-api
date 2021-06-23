import { SpecificationRepository } from "../../../repositories/Specification/SpecificationRepository";
import { FindByNameSpecificationController } from "./FindByNameSpecificationController";
import { FindByNameSpecificationService } from "./FindByNameSpecificationService";

const specificationRepository = SpecificationRepository.getInstance();

const findByNameSpecificationSevice = new FindByNameSpecificationService(
    specificationRepository
);

export const FinByNameSpecificationController =
    new FindByNameSpecificationController(findByNameSpecificationSevice);
