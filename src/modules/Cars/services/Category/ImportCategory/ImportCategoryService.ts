import csvParse from "csv-parse";
import fs from "fs";

import { ICategoryRepository } from "../../../repositories/Category/ICategoryRepository";

interface IImportCategory {
    name: string;
    description: string;
}

export class ImportCategoryService {
    private categoryRepository: ICategoryRepository;

    constructor(categoryRepository: ICategoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategory(file);
        categories.map(async (category) => {
            const { name, description } = category;
            const existsCategory = this.categoryRepository.findByName(name);
            if (!existsCategory) {
                this.categoryRepository.create({ name, description });
            }
        });
    }

    private loadCategory(
        file: Express.Multer.File
    ): Promise<Array<IImportCategory>> {
        return new Promise((resolve, reject) => {
            const categories: Array<IImportCategory> = [];

            const stream = fs.createReadStream(file.path);

            const parseFile = csvParse();

            stream.pipe(parseFile);

            parseFile
                .on("data", async (line) => {
                    const [name, description] = line;
                    categories.push({ name, description });
                })
                .on("end", () => {
                    fs.promises.unlink(file.path);
                    resolve(categories);
                })
                .on("error", (err) => {
                    reject(err);
                });
        });
    }
}
