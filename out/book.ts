
class Book {
    protected title: string;
    protected author: string;
    protected year: number;

    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    public getSummary(): string {
        return `${this.title} by ${this.author}, published in ${this.year}`;
    }
}

class ElectronicBook extends Book {
    private format: string;

    constructor(title: string, author: string, year: number, format: string) {
        super(title, author, year);
        this.format = format;
    }

    public getSummary(): string {
        return `${super.getSummary()}, available in ${this.format} format`;
    }
}

export { Book, ElectronicBook };
