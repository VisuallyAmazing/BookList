//Input,Autho,ISBN fields
const title = document.querySelector('#title'),
  author = document.querySelector('#author'),
  isbn = document.querySelector('#isbn'),
  list = document.querySelector('#book-list');

//Using a constructor
const Book = function(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
};


//Showing an alert
function showAlert(message, color) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(message));
  div.style.cssText = "height:40px;border-radius:10px;color:white;padding:20px";
  div.style.backgroundColor = color;
  const titleDiv = document.querySelector('.title-div');
  document.querySelector('#book-form').insertBefore(div, titleDiv);
  setTimeout(function() {
    div.remove();
  }, 1000)
}

//Adding a book
document.getElementById('book-form').addEventListener('submit', function(e) {
  let tValue = document.getElementById('title').value,
    aValue = document.getElementById('author').value,
    iValue = document.getElementById('isbn').value;
  const book = new Book(tValue, aValue, iValue);
  //Checking if the input fields are empty
  if (tValue === "" || aValue === "" || iValue === "") {
    showAlert('Please,fill out the form!', 'red');

  } else {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href = "#" class = "delete-item">X</a></td>

    `;
    list.appendChild(row);
    showAlert('Book Added!', 'green');
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('isbn').value = "";
  };
  e.preventDefault();
});
//Removing the Book
document.getElementById('book-list').addEventListener('click', function(e) {
  e.target.parentElement.parentElement.remove()
  showAlert('Book Deleted!', 'green');

});