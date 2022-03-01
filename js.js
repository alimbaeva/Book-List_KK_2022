

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI() { }

UI.prototype.addBookToList = function (book) {

    const list = document.getElementById('book-list');
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row);
}

UI.prototype.showAlert = function (msg, className) {
    const div = document.createElement("div");
    div.className = `alert ${className}`;

    div.appendChild(document.createTextNode(msg));
    const container = document.querySelector(".container");
    const h1 = document.querySelector("h1");
    container.insertBefore(div, h1);

    setTimeout(function () {
        document.querySelector(".alert").remove();
    }, 3000)
}

UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
};

UI.prototype.deleteBook = function (paraent) {
    paraent.parentNode.removeChild(paraent);

}



document.getElementById('button').addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;



    const book = new Book(title, author, isbn);
    const ui = new UI();

    if (title === '' || author === '' || isbn === '') {
        ui.showAlert('Пожалуйста заполните поле', 'error')
    } else {
        ui.addBookToList(book);
        ui.showAlert("Успешно добавлен", "succes")
        ui.clearFields(book);
    }

    let a = document.querySelectorAll('a');
    a.forEach(element => {
        element.addEventListener('click', () => {
            let paraent = element.parentNode;
            let paraentMain = paraent.parentNode;
            console.log(paraentMain)

            ui.deleteBook(paraentMain);

        })
    })

})
