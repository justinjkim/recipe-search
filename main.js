let url = "http://www.recipepuppy.com/api/?q=";

let search_bar = document.getElementById("search_bar");
let btnSearch = document.getElementById("btnSearch");

function search() {
	let user_input = search_bar.value;
	console.log(user_input); // test to make sure something is being logged to console...

	let search_term = `
		${url}${user_input}
	`;

	console.log(search_term);



}







