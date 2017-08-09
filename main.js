

let url = "http://recipepuppyproxy.herokuapp.com/api/?q="

let search_bar = document.getElementById("search_bar");
let btnSearch = document.getElementById("btnSearch");

function search() {
	let user_input = search_bar.value;
	let search_term = `
		${url}${user_input}
	`;
	console.log(search_term); // ok, it's definitely logging the proper url

	fetch(search_term)
	  .then(
	    // The promise returns a response from the server.
	    function(response) {
	      // We process the response accordingly.
	      if (response.status !== 200) {
	        console.log("Error: " + response.status);
	        return;
	      }
	      else {
	      	response.json().then(function(data) {
	      		let data_copy = data.results;

	      		let main = document.querySelector("main");
	      		// to reset in case you want to do a new search
	      		main.innerHTML = "";

	        	// for (i in data_copy) {
	        	// 	let recipe = document.createElement("div");
	        	// 	recipe.setAttribute("class", "recipe");
	        	// 	main.appendChild(recipe);

	        	// 	if (data_copy[i].thumbnail === "") {
	        	// 		let innards = `
	        	// 		<a href=${data_copy[i].href}><h3>${data_copy[i].title}</h3></a>
	        	// 		<img src="https://pleper.com/html/assets/img/no-image-found.jpg" class="placeholder"} />
	        	// 	`
	        	// 		recipe.innerHTML = innards;
	        	// 	}
	        	// 	else {
	        	// 		let innards = `
	        	// 		<a href=${data_copy[i].href}><h3>${data_copy[i].title}</h3></a>
	        	// 		<img src=${data_copy[i].thumbnail} />
	        	// 	`

	        	// 		recipe.innerHTML = innards;
	        	// 	}
	
	        		
	        	// } // end of for loop


	        	// not sure why but Map doesn't work here...
	        	data_copy.map((content) => {
	        		let recipe = document.createElement("div");
	        		recipe.setAttribute("class", "recipe");
	        		let main = document.querySelector("main");
	        		main.appendChild(recipe);

	        		// template literal
	        		let innards = `
	        			<img src="${content.thumbnail}" />
	        			<h3>${content.title}</h3>
	        		`

	        		recipe.innerHTML = innards;
	        	}) // end of map function

	      	}); // end of actual function that parses through JSON
	      } // end of overall successful response function
	      
	    } // end of overall ALL response functions
	  ) // end of "then"
	  .catch(function(err) {
	    console.log("Fetch Error :-S", err);
	  });



}







