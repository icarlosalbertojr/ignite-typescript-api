import { CategoryRepository } from "../../../repositories/Category/CategoryRepository";
import { FindByNameCategoryService } from "../FindByNameCategory/FindByNameCategoryService";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryService } from "./CreateCategoryService";

const categoryRepository = CategoryRepository.getInstance();

const findByNameCategoryService = new FindByNameCategoryService(
    categoryRepository
);

const createCategoryService = new CreateCategoryService(
    categoryRepository,
    findByNameCategoryService
);

export const createCategoryController = new CreateCategoryController(
    createCategoryService
);
