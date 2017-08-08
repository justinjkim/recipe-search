let url = "http://www.recipepuppy.com/about/api/";

let search_bar = document.getElementById("search_bar");
search_bar.addEventListener("keyup", search);

function search() {
	let user_input = this.value;
	console.log(user_input);
}

