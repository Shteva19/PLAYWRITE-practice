"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
var book_1 = require("./book");
// Створення об'єктів для кожного класу та виклик методу getSummary
var book1 = new book_1.Book("Harry Potter", "J.K. Rowling", 1997);
console.log(book1.getSummary()); // Виведе: Harry Potter by J.K. Rowling, published in 1997
var ebook1 = new book_1.ElectronicBook("Clean Code", "Robert C. Martin", 2008, "PDF");
console.log(ebook1.getSummary()); // Виведе: Clean Code by Robert C. Martin, published in 2008, available in PDF format
