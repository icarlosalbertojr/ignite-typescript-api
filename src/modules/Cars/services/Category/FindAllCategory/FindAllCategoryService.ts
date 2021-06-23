import { Category } from "../../../models/Category";
import { ICategoryRepository } from "../../../repositories/Category/ICategoryRepository";

export class FindAllCategoryService {
    private categoryRepository: ICategoryRepository;

    constructor(categoryRepository: ICategoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    execute(): Category[] {
        return this.categoryRepository.findAll();
    }
}
