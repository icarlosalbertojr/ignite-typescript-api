import { CategoryRepository } from "../../../repositories/Category/CategoryRepository";
import { FindByNameCategoryController } from "./FindByNameCategoryController";
import { FindByNameCategoryService } from "./FindByNameCategoryService";

const categoryRepository = CategoryRepository.getInstance();

const findByNameCategoryService = new FindByNameCategoryService(
    categoryRepository
);

export const findByNameCategoryController = new FindByNameCategoryController(
    findByNameCategoryService
);
