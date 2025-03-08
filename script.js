
let form = document.querySelector('form');
let title = document.getElementById('title');
let author = document.getElementById('author');
let isbn = document.getElementById('isbn');
let table = document.querySelector('.table');  
let book = document.getElementById('book-list');


form.addEventListener("submit", (e) => {
  e.preventDefault(); 


  let newRow = book.insertRow();
  
 
  let cell1 = newRow.insertCell();
  cell1.innerText = title.value;
  
  let cell2 = newRow.insertCell();
  cell2.innerText = author.value;
  
  let cell3 = newRow.insertCell();
  cell3.innerText = isbn.value;

  let deleteCell = newRow.insertCell();
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  
  deleteButton.classList.add('delete'); 

  deleteCell.appendChild(deleteButton);

  deleteButton.addEventListener("click", () => {
    newRow.remove();
  });

  title.value = '';
  author.value = '';
  isbn.value = '';
});
