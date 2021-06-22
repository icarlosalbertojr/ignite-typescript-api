import { Category } from "../models/Category";
import { ICategoryRepository } from "./ICategoryRepository";

export class CategoryRepository implements ICategoryRepository {
    create(category: Category): Category {
        console.log(category);
        return new Category();
    }

    findByName(name: string): Category {
        console.log(name);
        return new Category();
    }

    findById(id: string): Category {
        console.log(id);
        return new Category();
    }
    findAll(): Category[] {
        console.log("Retornou a lista");
        return new Array<Category>();
    }
}
