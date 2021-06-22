import { Category } from "../models/Category";
import { CategoryRepository } from "../repositories/CategoryRepository";

export class FindAllCategoryService {
    private categoryRepository: CategoryRepository;

    constructor(categoryRepository: CategoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    execute(): Category[] {
        return this.categoryRepository.findAll();
    }
}
