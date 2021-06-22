import { Category } from "../models/Category";

export interface ICreateCategoryDTO {
    name: string;
    description: string;
}

export interface ICategoryRepository {
    create(category: ICreateCategoryDTO): Category;
    findByName(name: string): Category;
    findById(id: string): Category;
    findAll(): Category[];
}
