/*Comentarios Imprime información por consola*/
console.log("Hola mundo");

var numero1 = 52.5;
var numero2 = 45;
console.log(numero1+numero2);

var nombre = "Santiago";
var apellido = 'Delgado';
console.log(nombre);
console.log(apellido);

var tiene_mascota = true;
tiene_mascota = false;

var frutas = ['manzana', 'pera', 'lulo', 25, true];
console.log(frutas[3]);

var persona = {nombre:"Santiago", 
				edad:25,
				tiene_mascota:true,
				mascota:{
					raza: "Dalmata" , 
					nombre: "Bigotes"
				}
			};

console.log(persona['nombre']);
console.log(persona.nombre);
console.log(persona.mascota.raza);

var fecha = new Date();
console.log(fecha);

console.log(!true);
console.log(!false);
console.log(true && true);
console.log(true && false);
console.log(true || true);
console.log(true || false);

console.log(5%4);
console.log(6>3);
console.log(6<3);
console.log(6 == 6);
console.log(6!=6);
console.log(6>=6);

var edad=17;

var i = 3;
console.log(i++);
console.log(++i);
if (edad>=18) 
{
	console.log('Eres mayor de edad');
}
else
{
console.log('No eres mayor de edad');
}

var dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
for(var i = 0;i<7;i++)
{
	console.log(dias[i]);
	if (i==5) 
	{
		break;
	}
}


function suma(n1,n2)
{
	var res = n1+n2;
	return res;
	
	
}

//Función calcular IVA

console.log(suma(5,3));

alert(suma(8,3));

function iva(precio)
{
	var resu = precio * 0.19;
	return  resu;
}


console.log(iva(10000));

//OTRA FORMA DE HACERLO
function calcular_iva(precio_producto)
{
	var iva = 0.19;
	var resultado = precio_producto*iva;
	return resultado;
}
console.log(calcular_iva(10000));