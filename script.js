// Selecting the form and elements
let form = document.querySelector('form');
let title = document.getElementById('title');
let author = document.getElementById('author');
let isbn = document.getElementById('isbn');
let table = document.querySelector('.table');  // Correctly select the table
let deleteBtn = document.getElementById('deleteRow');

// Listen for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission

  // Create a new row in the table
  let newRow = table.insertRow();
  
  // Create and insert cells into the new row
  let cell1 = newRow.insertCell();
  cell1.innerText = title.value;
  
  let cell2 = newRow.insertCell();
  cell2.innerText = author.value;
  
  let cell3 = newRow.insertCell();
  cell3.innerText = isbn.value;

  // Create and insert a delete button in the row
  let deleteCell = newRow.insertCell();
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteCell.appendChild(deleteButton);

  // Attach a click event listener to delete the row
  deleteButton.addEventListener("click", () => {
    newRow.remove();  // Removes the row
  });

  // Clear the form fields after submission
  title.value = '';
  author.value = '';
  isbn.value = '';
});
