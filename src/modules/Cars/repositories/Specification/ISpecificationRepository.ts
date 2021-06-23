import { Specification } from "../../models/Specification";

export interface ICreateSpecificationDTO {
    name: string;
    description: string;
}
export interface ISpecificationRepository {
    create(specification: ICreateSpecificationDTO): Specification;
    findByName(name: string): Specification;
}
