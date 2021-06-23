import { Category } from "../../../models/Category";
import {
    ICategoryRepository,
    ICreateCategoryDTO,
} from "../../../repositories/Category/ICategoryRepository";
import { FindByNameCategoryService } from "../FindByNameCategory/FindByNameCategoryService";

export class CreateCategoryService {
    private categoryRepository: ICategoryRepository;
    private findByNameCategoryService: FindByNameCategoryService;

    constructor(
        categoryRepository: ICategoryRepository,
        findByNameCategoryService: FindByNameCategoryService
    ) {
        this.categoryRepository = categoryRepository;
        this.findByNameCategoryService = findByNameCategoryService;
    }

    execute({ name, description }: ICreateCategoryDTO): Category {
        const categoryAlreadyExists =
            this.findByNameCategoryService.execute(name);

        if (categoryAlreadyExists) {
            throw new Error("Category already exists!");
        }
        return this.categoryRepository.create({ name, description });
    }
}
