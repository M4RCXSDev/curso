//Se requiere tenga las claves
// 2 cadena
// 2 numerico (entero, decimal)
// 1 null
// 1 logica (false, true)
// 1 array (cadenas)
// 1 array (objetos)
// 1 objeto (arrays)
const CR7 = {
  nombres: "Cristiano Ronaldo",
  apellidos: "Dos Santos Aveiro",
  edad: 41,
  altura: 1.87,
  tatuajes: null,
  sigueJugando: true,  
  equipos: ["Sporting De Lisboa", "Manchester United", "Real MAdrid", "Juventus"],
  premios: [
    {premio: "Puskas", cantidad:1},
    {premio: "Balon de oro", cantidad:5},
    {premio: "Champions League", cantidad:5}
  ],
  estadisticas: { 
    goles:[ 450,145,101],
    asistencias:[120,57,20]
 }
}

//¿Cúal es el ultimo equipo en el que jugo?
console.log(CR7.equipos[CR7.equipos.length -1])

//¿Cuántos puskas tiene?
console.log(CR7.premios[0].cantidad)

//¿Cuantas Champions League tiene?
console.log(CR7.premios[CR7.premios.length -1].cantidad)

//Mostrar todos sus goles y asistencias
const goles = CR7.estadisticas.goles
goles.forEach(goles => {
  console.log(goles)
});