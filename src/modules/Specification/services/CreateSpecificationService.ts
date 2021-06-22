import { Specification } from "../models/Specification";
import {
    ICreateSpecificationDTO,
    ISpecificationRepository,
} from "../repositories/ISpecificationRepository";
import { FindByNameSpecificationService } from "./FindByNameSpecificationService";

export class CreateSpecificationService {
    private specificationRepository: ISpecificationRepository;
    private findByNameSpecificationService: FindByNameSpecificationService;

    constructor(
        specificationRepository: ISpecificationRepository,
        findByNameSpecificationService: FindByNameSpecificationService
    ) {
        this.specificationRepository = specificationRepository;
        this.findByNameSpecificationService = findByNameSpecificationService;
    }

    public execute({
        name,
        description,
    }: ICreateSpecificationDTO): Specification {
        const specificationAlreadyExists =
            this.findByNameSpecificationService.execute(name);
        if (specificationAlreadyExists) {
            throw new Error("Specification already exists!");
        }
        return this.specificationRepository.create({ name, description });
    }
}
