// Book consturctor(creating the book objects)
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}


//UI constructor(add books,delete the book,show the alert)
function UI() {

}
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list');
  //Create tr element
  const row = document.createElement('tr');
  //Insert cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href = "#" class = "delete">x</a></td>
`;

  list.appendChild(row);
}
//Clear fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').author = '';
  document.getElementById('isbn').isbn = '';
}
//Show Alert
UI.prototype.showAlert = function(message, className) {
  //creating a div
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  //Add Text
  div.appendChild(document.createTextNode(message));
  //Get a parent
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  container.insertBefore(div, form);
  //Time out after 3 secs
  setTimeout(function() {
    document.querySelector('.alert').remove();
  }, 3000);
}

//Event Listeners for adding a book
document.getElementById('book-form').addEventListener('submit',
  //Get form values
  function(e) {
    const title = document.getElementById('title').value,
      author = document.getElementById('author').value,
      isbn = document.getElementById('isbn').value;

    //Creating book from Book constructors
    const book = new Book(title, author, isbn);
    //UI consturctor
    const ui = new UI();
    //Validate
    if (title === '' || author === '' || isbn === '') {
      //Error alert
      ui.showAlert('Please fill in all fields', 'error')
    } else {
      //Add book to list
      ui.addBookToList(book);
      ui.showAlert('Book Added!', 'success');
      //Clear Fields
      ui.clearFields();
    }
    //Add book to list
    ui.addBookToList(book);
    //Clear Fields
    ui.clearFields();


    e.preventDefault();
  });
//Event listener for delete
document.querySelector('#book-list').addEventListener('click', function(e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.parentElement.remove();

  }

});