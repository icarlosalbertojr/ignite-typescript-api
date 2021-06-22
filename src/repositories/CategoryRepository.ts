import { Category } from "../models/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

export class CategoryRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({ name, description }: ICreateCategoryDTO): Category {
        const category = new Category();
        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });
        this.categories.push(category);
        return category;
    }

    findById(id: string): Category {
        return this.categories.find((category) => category.id === id);
    }

    findAll(): Category[] {
        return this.categories;
    }
}
