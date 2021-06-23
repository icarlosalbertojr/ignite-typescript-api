import { Category } from "../../../models/Category";
import { CategoryRepository } from "../../../repositories/Category/CategoryRepository";

export class FindByNameCategoryService {
    private categoryRepository: CategoryRepository;

    constructor(categoryRepository: CategoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    execute(name: string): Category {
        return this.categoryRepository.findByName(name);
    }
}
