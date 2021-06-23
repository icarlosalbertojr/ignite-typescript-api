import { Specification } from "../../models/Specification";
import {
    ICreateSpecificationDTO,
    ISpecificationRepository,
} from "./ISpecificationRepository";

export class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    findByName(name: string): Specification {
        return this.specifications.find(
            (specification) => specification.name === name
        );
    }

    create({ name, description }: ICreateSpecificationDTO): Specification {
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
