/*Cuando el boton toggle se le haga click quiero que muestre el menu.
Seleccionamos al botón con ID="toggle y le decimos que escuche el evento click 
https://codepen.io/topics/ - menu icons
jsbin.com para depurar codigo
*/
toggle.addEventListener(
	"click",
	function(){
		// Esto succede cuando se hace click
		console.log("Hiciste clic");
		// Trabajo con una clase en css, trabajar con flex y no block, que era el original. busca todas las clases que tienen id menu y le aplica la clase mostrar.
		// En el inspector me aparece el "event" para encontrar el javascirpt
		menu.classList.toggle("mostrar");
		document.getElementById("barras").classList.toggle("cambiar");
		/* La propiedad de sólo lectura Element.classList devuelve una colección activa de 
		DOMTokenList de los atributos de clase del elemento.*/
		/* classList tiene 3 opciones:
		add: enciende
		remove: apaga
		toggle: si no esta la agrega, si ya esta la apaga
		*/
	}
);


inicio.addEventListener (
	"click",
	function(){
		console.log("Click al inicio");
		console.log("document.getElementById('barras').className: ", document.getElementById("barras").className);
		if(document.getElementById("barras").className === "menuBarras cambiar") {
			console.log("Entro al IF");
			document.getElementById("barras").classList.remove("cambiar");
			menu.classList.remove("mostrar");
		}		
	}
);


/*
cabecera.addEventListener (
	"click",
	function(){
		console.log("Click a cabecera");
		console.log("document.getElementById('barras').className: ", document.getElementById("barras").className);
		if(document.getElementById("barras").className === "menuBarras cambiar") {
			console.log("Entro al IF");
			document.getElementById("barras").classList.remove("cambiar");
			menu.classList.remove("mostrar");
		}		
	}
);
*/