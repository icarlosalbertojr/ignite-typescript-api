import { Category } from "../../../models/Category";
import { ICategoryRepository } from "../../../repositories/Category/ICategoryRepository";

export class FindByNameCategoryService {
    private categoryRepository: ICategoryRepository;

    constructor(categoryRepository: ICategoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    execute(name: string): Category {
        return this.categoryRepository.findByName(name);
    }
}
