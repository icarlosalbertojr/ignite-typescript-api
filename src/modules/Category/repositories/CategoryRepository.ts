import { Category } from "../models/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "./ICategoryRepository";

export class CategoryRepository implements ICategoryRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    public create({ name, description }: ICreateCategoryDTO): Category {
        const category = new Category();
        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
        return category;
    }

    public findById(id: string): Category {
        return this.categories.find((category) => category.id === id);
    }

    public findAll(): Category[] {
        return this.categories;
    }

    public findByName(name: string): Category {
        return this.categories.find((category) => category.name === name);
    }
}
