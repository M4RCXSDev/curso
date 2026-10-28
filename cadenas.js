
// Cadenas = conjunto de caracteres
//1 solo caracter = CHAR

//Existen 3 formas para crear cadenas JS:
const tradicional = "Hola soy un texto"
const simples = 'un gusto conocerte'
const mensaje = `Soy un texto muy especial`//ALT GR + CERRAR LAVE para backticks: comillas invertidas

//Backticks permite multilínea + inyección
const nombre = 'Jhon'
const carrera = 'programador'

const historia =`
Esta es la historia de ${nombre}
un ${carrera}
que solo quería Vibecodear
`

console. log(historia)

//propiedades
const longitud = carrera.length//total de carecteres
console.log(longitud)

const amigos = ["Luis", "Miguel", "Juan", "José", "Raul", "Ernesto"]

//console.log(longitud)

//metodos

console.log('concat:' , carrera.concat(nombre))
console.log('repeat:', carrera.repeat(3))
console.log('repacle:', carrera.replace('a', '@'))
console.log('uppercase:' , carrera.toUpperCase())
console.log('lowercase:', carrera.toLocaleLowerCase())
console.log('replace all :', carrera.replaceAll('a', '@'))
console.log('split:', carrera.split('m'))
console.log('trim:', carrera.trim())


//Extraer los primeros 3 caracteres
console.log('3 primeros: ', carrera.substring(0, 3))

//Extraer grama de programador
console.log('caracteres internos: ', carrera.substring(3, 8))