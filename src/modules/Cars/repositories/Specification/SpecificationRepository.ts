import { Specification } from "../../models/Specification";
import {
    ICreateSpecificationDTO,
    ISpecificationRepository,
} from "./ISpecificationRepository";

export class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[];
    private static INTANCE: SpecificationRepository;

    private constructor() {
        this.specifications = [];
    }

    public getInstance(): ISpecificationRepository {
        if (!SpecificationRepository.INTANCE) {
            SpecificationRepository.INTANCE = new SpecificationRepository();
        }
        return SpecificationRepository.INTANCE;
    }

    public findByName(name: string): Specification {
        return this.specifications.find(
            (specification) => specification.name === name
        );
    }

    public create({
        name,
        description,
    }: ICreateSpecificationDTO): Specification {
        const specification = new Specification();
        Object.assign(specification, {
            name,
            description,
            create_at: new Date(),
        });
        this.specifications.push(specification);
        return specification;
    }
}
