const booksDescription = () => {
    const element = document.getElementById("title");
    element.textContent = "Book description generator";



    const books = [
        {
            name: "Crime and Punishment",
            author: "Fyodor Dostoyevsky",
            year: "1887",
            read: "not read it yet",
        },

        {
            name: "Harry Potter",
            author: "JK Rolling",
            year: "2000",
            read: "read the book",
        },

        {
            name: "The Art of War",
            author: "Sun Tzu",
            year: "2000",
            read: "read the book",
        },

        {
            name: "The Hobbit",
            author: "J.R.R. Tolkien",
            year: "1910",
            read: "read the book",
        },
    ];

    for (let book of books) {
        const list = document.createElement("ul");
        const listItem = document.createElement("li");

        listItem.textContent =
            book.name +
            " - Is a book written by: " +
            book.author +
            " and it was published in the year " +
            book.year +
            " , I have " +
            book.read;

        console.log(list);

        list.appendChild(listItem);
        element.appendChild(list);
    }
};
