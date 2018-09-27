/*Por nombre
var titulos = document.getElementsByTagName('h1');
console.log(titulos);
*/
//Por clase
/*function cambiar_mensaje()
{
	var texto_rojo = document.getElementsByClassName('rojo');
	//console.log(texto_rojo[1].textContent);
	//cambiar el valor de un objeto o array
	texto_rojo[1].textContent = "Grupo 175";
}

/*Por Id
var fecha = document.getElementById('fecha');
console.log(fecha);*/

function calcular_iva()
{
	var precio = parseInt(document.getElementById("precio").value);
	var resultado = precio * 0.19;
	var span_resultado = document.getElementById("resultado");
	span_resultado.textContent = resultado;
}
