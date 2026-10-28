//Estructuras =  OBJETOS
//Desestructuras = ABRIR OBJETOS
const persona = {
  apellidos: "Yarleque pena",
  nombres: "Marcos isaias",
  edad: 20,
  skills: ["PHP", "Java", "Javascript"]
}

//Guardar apellidos, nombres, edad en variables
/*const apellidos =  persona.apellidos
const nombres =  persona.nombres
const edad =  persona.edad
*/

//Desestructurar es separar datos provenientes de un OBJETO
//NOTA: No es necesario reuperar toda la colección
//NOTA: Las variables deben coincidir con las claves
const { apellidos, nombres,edad, skills} = persona

console.log(apellidos, nombres,edad, skills)