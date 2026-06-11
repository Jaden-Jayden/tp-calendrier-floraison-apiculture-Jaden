const countainer = document.getElementById("mon-conteneur");

const API = "http://10.69.4.8:3001/v1/";

async function get() {
	const reponse = await fetch(
		"http://10.69.4.8:3001/v1/flowers?page=0&pageSize=25",
	);
	const data = await reponse.json();
	console.log(data);
	return data;
}
function postExtension({ image, name, description }) {
	const article = document.createElement("article");
	const img = document.createElement("img");
	const div = document.createElement("div");
	const divEtoile = document.createElement("div");
	const h2 = document.createElement("h3");
	const p = document.createElement("p");
	const pnp = document.createElement("div");
	const divp = document.createElement("div");
	const Propolis = document.createElement("h2");
	const divn = document.createElement("div");
	const Nectar = document.createElement("h2");
	const divpp = document.createElement("div");
	const Pollen = document.createElement("h2");

	img.src = image;
	h2.textContent = name;
	p.textContent = description;
	Propolis.textContent = "Propolis";
	Nectar.textContent = "Nectar";
	Pollen.textContent = "Pollen";
	img.classList.add("img");
	divEtoile.classList.add("divEtoile");
	div.classList.add("divArt");
	h2.classList.add("h3Art");
	p.classList.add("pDesc");
	pnp.classList.add("propriete");
	divp.classList.add("prop");
	Propolis.classList.add("pProp");
	divn.classList.add("propValue");
	Nectar.classList.add("pProp");
	divpp.classList.add("propValue");
	Pollen.classList.add("pProp");

	article.append(img, div);
	div.append(h2, p, pnp);
	pnp.append(divp, divn, divpp);
	divp.append(Propolis);
	divn.append(Nectar);
	divpp.append(Pollen);

	return div;
}
function showe(bookshevels) {
	for (let i = 0; i < bookshevels.length; i++) {
		const { image, name, description } = bookshevels[i];

		const bigextension = postExtension({
			image,
			name,
			description,
		});

		countainer.appendChild(bigextension);
	}
}
document.addEventListener("DOMContentLoaded", async () => {
	const response = await fetch(
		"http://10.69.4.8:3001/v1/flowers?page=0&pageSize=25",
		{},
	);
	const data = await response.json();

	console.log(postExtension);
	showe(data);
	console.log(data);
});
