"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const seed_service_1 = require("./seed.service");
const seed_controller_1 = require("./seed.controller");
const author_entity_1 = require("../authors/author.entity");
const book_entity_1 = require("../books/book.entity");
const category_entity_1 = require("../categories/category.entity");
const authors_module_1 = require("../authors/authors.module");
const categories_module_1 = require("../categories/categories.module");
const books_module_1 = require("../books/books.module");
let SeedModule = class SeedModule {
};
exports.SeedModule = SeedModule;
exports.SeedModule = SeedModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([author_entity_1.Author, book_entity_1.Book, category_entity_1.Category]),
            authors_module_1.AuthorsModule,
            categories_module_1.CategoriesModule,
            books_module_1.BooksModule,
        ],
        providers: [seed_service_1.SeedService],
        controllers: [seed_controller_1.SeedController],
    })
], SeedModule);
//# sourceMappingURL=seed.module.js.map