import { ICategoryRepository } from "../../../repositories/Category/ICategoryRepository";

export class ImportCategoryService {
    private categoryRepository: ICategoryRepository;

    constructor(categoryRepository: ICategoryRepository) {
        this.categoryRepository = categoryRepository;
    }
}
