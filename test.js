const API = "http://10.69.4.8:3001/v1/";

async function getpokemon(id) {
	const response = await fetch(
		"http://10.69.4.8:3001/v1/flowers?page=0&pageSize=25",
		{
			method: "GET",
		},
	);
	const data = await response.json();

	console.log(data);
}

getpokemon();
