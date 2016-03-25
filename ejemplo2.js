// Lectura de Datos de un Array

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

// Mostrar estrellas mayores a 6 - Ciclo For

var PersonajesEstrellados = []

for(var i = 0; i <= equipos.length - 1; i++) {
	var el = equipos[i]
	for(var j = 0; j <= el.stars.length - 1; j++) {
		var estrella = el.stars[j]
		if(estrella > 6) {
			PersonajesEstrellados.push({nombre: el.nombre, estrellas: estrella})
			break
		}
	}
}

console.log(PersonajesEstrellados)

// Mostrando estrellas mayores a 6 - functional JS

var PersonajesEstrellados = []

PersonajesEstrellados = equipos
	.filter(function (element) {
		return element.stars.some(function (stars) {
			return stars > 6
		})
	})
	.map(function (element) {
		return {nombre: element.nombre, estrellas: element.stars}
	})

console.log(PersonajesEstrellados)


// Mostrando estrellas mayores a 6 - ECS 6 + Functional JS

var PersonajesEstrellados = []

PersonajesEstrellados = equipos
	.filter(element => element.stars.some(stars => stars > 6))
	.map(element => { 
		return {nombre: element.nombre, estrellas: element.stars} 
	})


