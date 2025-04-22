const library = [];
let running = true;

const addBook = () => {
    const title = prompt('Enter the title of the book:');
    const author = prompt('Enter the author of the book:');
    const readStatus = confirm('Have you read this book?');
    library.push({ title, author, readStatus });
    alert(`Book "${title}" by ${author} added.`);
};

const listBooks = () => {
    if (library.length === 0) {
        alert('No books in the library.');
        return;
    }
    let bookList = 'Books in the library:\n';
    library.forEach((book, index) => {
        bookList += `${index + 1}. ${book.title} by ${book.author} - ${book.readStatus ? 'Read' : 'Unread'}\n`;
    });
    alert(bookList);
};

const removeBook = () => {
    const index = prompt('Enter the number of the book to remove:') - 1;
    if (index < 0 || index >= library.length) {
        alert('Invalid book number.');
        return;
    }
    const removedBook = library.splice(index, 1)[0];
    alert(`Book "${removedBook.title}" removed from the library.`);
};

const markAsRead = () => {
    const index = prompt('Enter the number of the book to mark as read:') - 1;
    if (index < 0 || index >= library.length) {
        alert('Invalid book number.');
        return;
    }
    library[index].readStatus = true;
    alert(`Book "${library[index].title}" marked as read.`);
};

const markAsUnread = () => {
    const index = prompt('Enter the number of the book to mark as unread:') - 1;
    if (index < 0 || index >= library.length) {
        alert('Invalid book number.');
        return;
    }
    library[index].readStatus = false;
    alert(`Book "${library[index].title}" marked as unread.`);
};

while (running) {
    const choice = prompt(
`Book Tracker 📚
1. Add a book
2. List all books
3. Remove a book
4. Mark book as Read
5. Mark book as Unread
6. Exit`
    );
    
    switch (choice) {
        case "1":
            addBook();
            break;
        case "2":
            listBooks();
            break;
        case "3":
            removeBook();
            break;
        case "4":
            markAsRead();
            break;
        case "5":
            markAsUnread();
            break;
        case "6":
            running = false;
            alert('Goodbye!');
            break;
        default:
            alert('Invalid choice. Please try again.');
    }
}
