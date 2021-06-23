import { CategoryRepository } from "../../../repositories/Category/CategoryRepository";
import { FindAllCategoryController } from "./FindAllCategoryController";
import { FindAllCategoryService } from "./FindAllCategoryService";

const categoryRepository = CategoryRepository.getInstance();
const findAllCategoryService = new FindAllCategoryService(categoryRepository);
export const findAllCategoryController = new FindAllCategoryController(
    findAllCategoryService
);
