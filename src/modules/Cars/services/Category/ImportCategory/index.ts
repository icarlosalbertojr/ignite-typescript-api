import { CategoryRepository } from "../../../repositories/Category/CategoryRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryService } from "./ImportCategoryService";

const categoryRepository = CategoryRepository.getInstance();

const importCategoryService = new ImportCategoryService(categoryRepository);

export const importCategoryController = new ImportCategoryController(
    importCategoryService
);
