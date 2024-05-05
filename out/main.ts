
import { Book, ElectronicBook } from "./book";


const book1 = new Book("Harry Potter", "J.K. Rowling", 1997);
console.log(book1.getSummary()); 

const ebook1 = new ElectronicBook("Clean Code", "Robert C. Martin", 2008, "PDF");
console.log(ebook1.getSummary()); 
