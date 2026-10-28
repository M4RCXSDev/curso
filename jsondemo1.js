//Se requiere tenga las claves
// 2 cadena
// 2 numerico (entero, decimal)
// 1 null
// 1 logica (false, true)
// 1 array (cadenas)
// 1 array (objetos)
// 1 objeto (arrays)
const pelicula = {
  titulo: "Avatar",
  anio: 2009,
  idiomas: ["Ingles", "Español"],
  duracionMin: 162,
  generos: ["Accion", "Ciencia ficcion", "Aventura"],
  presupuesto: 237000000,
  recaudacion: 2923706026,
  elenco: [
    { actor: "Sam Worthington", personaje: "Jake Sully" },
    { actor: "Zoe Saldana", personaje: "Neytiri" },
    { actor: "Sigourney Weaver", personaje: "Dra. Grace Augustine" },
    { actor: "Stephen Lang", personaje: "Coronel Miles Quaritch" },
    { actor: "Michelle Rodriguez", personaje: "Trudy Chacon" },
    { actor: "Giovanni Ribisi", personaje: "Parker Selfridge" }
  ],
  direccion: ["James Cameron"],
  escritores: ["James Cameron"]
}

// ¿Cuál es el último género de la película?
console.log(pelicula.generos[pelicula.generos.length - 1])

// ¿Quién es el primer actor?
console.log(pelicula.elenco[0].actor)

// ¿Quién es el último actor?
console.log(pelicula.elenco[pelicula.elenco.length - 1].actor)

// Mostrar todos sus actores y personajes
const elenco = pelicula.elenco
elenco.forEach(actor => {
  console.log(actor.actor)
  console.log(actor.personaje)
});