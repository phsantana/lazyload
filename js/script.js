// let lazy = lazyload(document.querySelectorAll(".este"));
let lazy = lazyload();

lazy.loadImages();

var imagens = ["acme1.png", "acme2.png", "img1.jpg"];
var path = "assets/img/";

document.querySelector("#gerador").onclick = () => {

	var body = document.querySelector("body");
	var elementos = new Array();
	var preBody = "";
	var posBody = "";

	for(let i = 0, tam = body.children.length-3; i < tam; i++)
		preBody += body.children[i].outerHTML;

	for(let i = body.children.length-3, tam = body.children.length; i < tam; i++)
		posBody += body.children[i].outerHTML;

	body.innerHTML = preBody + preBody + posBody;

		// lazyload(document.querySelectorAll(".este"));
}