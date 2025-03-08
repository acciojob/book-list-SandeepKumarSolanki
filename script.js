//your JS code here. If required.

let form = document.querySelector('form');
let title = document.getElementById('title')
let author = document.getElementById('author')
let isbn = document.getElementById('isbn');
let table = document.getElementsByClassName('table')
let deleteBtn = document.getElementById('deleteRow');
form.addEventListener("submit" , ()=>{
	
	let newRow = table.insertRow();
	let cell1 = newRow.insertCell();
	cell1.innerText = `${title.value}`
	let cell2 = newRow.insertCell();
	cell2.innerText = `${author.value}`
	let cell3 = newRow.insertCell();
	cell1.innerText = `${isbn.value}`

	deleteBtn.addEventListener("click" , ()=>{
		let row = document.
		row.removeItem();
	})
	
})
