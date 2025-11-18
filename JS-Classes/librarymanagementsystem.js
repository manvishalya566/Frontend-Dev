class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (!this.isIssued) this.isIssued = true;
    }

    returnBook() {
        this.isIssued = false;
    }
}

let library = [
    new Book("JavaScript Guide", "John", "111"),
    new Book("Python Basics", "Alex", "222"),
    new Book("React Mastery", "Mark", "333", true)
];

console.log("Available Books:");
console.log(library.filter(book => !book.isIssued));

function issueBookByISBN(ISBN) {
    let book = library.find(b => b.ISBN === ISBN);
    if (book) book.issueBook();
}

issueBookByISBN("222");
