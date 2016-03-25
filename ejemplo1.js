// Functional JavaScript

var equipos = [
	{ nombre: 'Hatsune Miku', ocuppation: 'Singer', age: 15, anime: 'Vocaloid', stars: [10, 7], },
	{ nombre: 'Konata Izumi', ocuppation: 'Student', age: 18, anime: 'Lucky Start', stars: [4, 6] },
	{ nombre: 'Rin Kagamine', ocuppation: 'Singer', age: 14, anime: 'Vocaloid', stars: [8] },
	{ nombre: 'Raku Ichijo', ocuppation: 'Princeso', age: 17, anime: 'Nisekoi', stars: [7, 2] },
	{ nombre: 'Chitoge', ocuppation: 'Student', age: 17, anime: 'Nisekoi', stars: [10] },
	{ nombre: 'Asuna', ocuppation: 'Swordman', age: 14, anime: 'Sword Art Online', stars: [9,3,6] },
	{ nombre: 'Misaka Mikoto', ocuppation: 'Swordman', age: 17, anime: 'Toaru Majutsu no Index', stars: [6] },
	{ nombre: 'Mikasa', ocuppation: 'Double Swordman', age: 18, anime: 'Attack of Titans', stars: [4,5]},
	{ nombre: 'Kanda Sorata', ocuppation: 'Gamer Programmer', age: 17, anime: 'Sakurasou no pet Kanjo', stars: [3,5] },
	{ nombre: 'Shina Mashiro', ocuppation: 'cartoonist Japonise Comic', age: 18, anime: 'Sakurasou no pet Kanjo', stars: [4] }
]

// Problems:

// 1.- Cantidad de estrellas por anime
// 2.- Edades por encima del 17
// 3.- Cantidad de estrellas por ocupacion


// Solutions

// 1.- Cantidad de estrellas por anime

// Usando el Ciclo For

var Stars = []

for (var i = 0; i < equipos.length; i++) {
	var equipo = equipos[i]
	var cant = equipo.stars.length
	Stars.push({ nombre: equipo.nombre, cantidad: cant})
}

console.log(Stars)

// Usando map

var Stars = []

Stars = equipos.map(function (element){
	return ({ nombre: element.nombre, cantidad: element.stars.length})  //Funciona como push a cada cajon del nuevo array
})

console.log(Stars)


// Functional JS

// Random example, how use map

var numbers = [1,2,3,4,5]

// ECS6
numbers.map(x => x * 2)
// 2, 4, 6 ,8 , 10

// ECS6
numbers.map(function (x) {
	return x * 2
})
// 2, 4, 6 ,8 , 10


// 2.-  Edades por encima del 17

// Usando el ciclo For

var PersonajesMayores = []

for (var i = 0; i < equipos.length; i++) {
	var el = equipos[i]
	for(var j = 0; j < el.stars.length; j++) {
			var stars = el.stars[j]
			if(stars > 6) {
				PersonajesMayores.push(el.nombre)
				break
			}
	}
}

console.log(PersonajesMayores)

// Usando Filter

var PersonajesMayores = []

PersonajesMayores = equipos
		.filter(element => element.stars.some(points => points >= 6 ))
		.map(element => element.nombre)

console.log(PersonajesMayores)


// 3.- Cantidad de estrellas por ocupacion

// Usando ciclo for + map + filter

function unique (arr) {
	var uniques = []
	for(var i = 0; i < arr.length; i ++) {
		var elem = arr[i]
		if(uniques.indexOf(elem) < 0) {
			 uniques.push(elem)
		}
	}
	return uniques
}

var ocuppations = equipos.map(element => element.ocuppation)
// Con esto filtra y evita repetir elementos
ocuppations = unique(ocuppations)

console.log(ocuppations)

var cantidad = ocuppations
	.map(ocuppation => equipos.filter(element => element.ocuppation === ocuppation)
		.map(element => ({ ocuppation: element.ocuppation, stars: element.stars.length})))
	.map(elem => ({ ocuppation: elem[0].ocuppation, cantidad: elem.map(p => p.stars).reduce((a, b) => a + b) }))

// aqui salen repetidos
console.log(cantidad)

// Me devuelve un array con arrays dentros de objetos con ocupaciones similares

// [ 
//   [ { ocuppation: 'Singer', stars: 2 }, { ocuppation: 'Singer', stars: 1 } ],
//   [ { ocuppation: 'Student', stars: 2 }, { ocuppation: 'Student', stars: 1 } ],
//   [ { ocuppation: 'Princeso', stars: 2 } ],
//   [ { ocuppation: 'Swordman', stars: 3 },{ ocuppation: 'Swordman', stars: 1 } ],
//   [ { ocuppation: 'Double Swordman', stars: 2 } ],
//   [ { ocuppation: 'Gamer Programmer', stars: 2 } ],
//   [ { ocuppation: 'cartoonist Japonise Comic', stars: 1 } ]
// ]

// al pasar un map extra para armar este nuevo arreglo, sumando esos datos:


// [ { ocuppation: 'Singer', cantidad: 3 },
//   { ocuppation: 'Student', cantidad: 3 },
//   { ocuppation: 'Princeso', cantidad: 2 },
//   { ocuppation: 'Swordman', cantidad: 4 },
//   { ocuppation: 'Double Swordman', cantidad: 2 },
//   { ocuppation: 'Gamer Programmer', cantidad: 2 },
//   { ocuppation: 'cartoonist Japonise Comic', cantidad: 1 } ]



// forEach   --> itera sobre el array
// map       --> iterea sobre el array y crea un nuevo array







// Refactorizando un poco la funcion como clase

Array.prototype.unique = function unique () {
	var uniques = []
	for(var i = 0; i < this.length; i ++) {
		var elem = this[i]
		if(uniques.indexOf(elem) < 0) {
			 uniques.push(elem)
		}
	}
	return uniques
}

var cantidad = equipos
.map(element => element.ocuppation)
.unique()
.map(ocuppation => equipos.filter(element => element.ocuppation === ocuppation)
	.map(element => ({ ocuppation: element.ocuppation, stars: element.stars.length})))
.map(elem => ({ ocuppation: elem[0].ocuppation, cantidad: elem.map(p => p.stars).reduce((a, b) => a + b) }))

console.log(cantidad)





// Refactorizando un poco la funcion como clase , la funcion

Array.prototype.unique = function unique () {
	var uniques = []
	for(var i = 0; i < this.length; i ++) {
		var elem = this[i]
		if(uniques.indexOf(elem) < 0) {
			 uniques.push(elem)
		}
	}
	return uniques
}

// Una función "lambda" es una función anonima , que puedes como argumento a otra función. Como cuando haces un callback
// para closures, etc. 

var ocuppation = element => element.ocuppation


var OcuppationsPorElement = function (equipos) {
	return ocuppation => equipos.filter(element => element.ocuppation === ocuppation)
	.map(element => ({ ocuppation: element.ocuppation, stars: element.stars.length}))
}
// esa funcion, independientemente desde donde sea llamada despues (en este caso llamada luego por map) ,
// esa funcion siempre va a tener el array de equipos en su scope
// Independientemente que lo mueva a otro modulo, eso se llama currying


var SumaPorElementos = elem => ({ ocuppation: elem[0].ocuppation, cantidad: elem.map(p => p.stars).reduce((a, b) => a + b) })

// Aplicando Currying --> capacidad de, en una llamada o una función,  devolver una nueva función , pero que esa nueva funcion tenga como parametros ,
// los parametros que le paso a la primer funcion, a la funcion de arriba

var cantidad = equipos
	.map(ocuppation)
	.unique()
	.map(OcuppationsPorElement(equipos))  // aqui para map queda el retorno de esa funcion 
	.map(SumaPorElementos)

console.log(cantidad)







// Una funcion lambda es una funcion anonima,

// funcion lambda asignada a una variable
var sumar = function (a,b){
  return a+b;
}

alert(sumar(1,2));

// es lo mismo que decir
function sumar (a,b){
  return a+b;
}


// ahora supongamos que tenemos una funcion que busca el más grande de todos los numeros en un array

var masGrande = function (arr){
  var mayor=0;
  var len = arr.length;
  for(var i=0;i<>mayor){
          mayor=arr[i];
      }
  }
  return mayor;
}

var intArr = [1,2,3,4,5,6,7,8];
alert(masGrande(intArr));


// ahora que sucede si queremos comparar por ejemplo un array de objetos personas, donde cada persona tiene un miembro edad con el valor de su edad. veamos como reescribiriamos la función

var masGrande = function (arrP){
  var mayor=0;
  var len = arr.length;
  for(var i=0;i<>mayor.edad){
          mayor=arr[i];
      }
  }
  return mayor;
}
var personasArr = [{edad:2},{edad:2},{edad:2},{edad:2},{edad:2},{edad:2},{edad:2}];
alert(masGrande(personasArr));



// Pero este codigo es solamente util para encontrar la mayor "persona", y no sirve para ningun otro tipo de objeto (aunque a decir verdad si los objetos del array poseen un miembro edad es suficiente).
// Como podríamos escribir un algoritmo que aisle el comportamiento de buscar un mayor sin importar de los objetos que estemos comparando.
// Bueno gracias a las funciones anonimas podemos.

//si analizamos los ejemplos anteriores podemos ver que lo unico que
//cambia es el momento de comparar si un objeto es mayor o no
//entonces que sucede si

var masGrande = function (arr, esMayor){

//    en el parametro comparar recibiremos una funcion que compare dos objetos y nos
//    pueda decir cual es el mayor.
  var mayor=0;
  var len = arr.length;
  for(var i=0;i< mayor="arr[i];" personasarr =" [{edad:2},{edad:2},{edad:2},{edad:2},{edad:2},{edad:2},{edad:2}];">b.edad){
      return true;
  }else{
      return false;
  }
}));

//podemos buscar el mayor número
var intArr = [1,2,3,4,5,6,7,8];
alert(masGrande(intArr,function(a,b){
  if(a>b){
      return true;
  }else{
      return false;
  }
}));

//podemos buscar el mayor de objetos con estructuras complicadas
var objArr = [{edad:20,fuerza:40},{edad:30,fuerza:50},{edad:10,fuerza:23},{edad:21,fuerza:40}];
alert(masGrande(objArr,function(a,b){
  if((50-a.edad)*a.fuerza>(50-b.edad)*b.fuerza){
      return true;
  }else{
      return false;
  }
}));


// Como vemos hemos logrado aislar el comportamiento de buscar un mayor sin importar los objetos que estemos comparando.

// Ahora veamos un ejemplo simple para modificar el comportamiento de un objeto

var perro=function(){};

perro.prototype={
comer: function(){
      alert('comiendo con el hocico');
  }
};

var persona = new perro;
persona.comer=function(){
  alert('comiendo con la boca');
};

// es muy sencillo entender la utilidad de este tipo de estructuras luego de observar estos ejemplos
// (los ejemplos no han sido probado, si al probarlos encontrases algun error por favor comunicamelo e intenta encontrar la solucion)


function make_adder (x) {
	return function (y) { 
		 return x + y; 
	}
}

var add5 = make_adder (5);
alert (add5(8));
// 13