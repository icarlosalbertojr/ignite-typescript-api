import { Specification } from "../models/Specification";
import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

export class FindByNameSpecificationService {
    private specificationRepository: ISpecificationRepository;

    constructor(specificationRepository: ISpecificationRepository) {
        this.specificationRepository = specificationRepository;
    }

    public execute(name: string): Specification {
        return this.specificationRepository.findByName(name);
    }
}
