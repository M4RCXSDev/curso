//Crea una funcion que reciba el ID del planeta, haga usp del API Drsgon Ball
//Y retorne una lista de personajes (name- race - affiliation) ejemplo 1:
//Picollo - Namekian - Z fighter
//Ginyu - Frieza Race - Army of Frieza
//Dende - Namekian - Z fighter

async function obtenrePlaneta(id){
   
  const api_url = `https://dragonball-api.com/api/planets/${id}`

  try{

    const respuesta = await fetch(api_url)

  if(!respuesta.ok)
      throw new Error(`No hay comunicación con el servidor`) //¡Stop!

    const datos = await respuesta.json()
    const planetas  = datos.items

 const personajes = datos.items
 personajes.forEach(personaje => {
   
 });

  }catch(e){
    console.error(`No se pudo conectar la operación: ${e}`)
  }



} //Fin de la funcion obtenerPersonaje()


//TEST
//Debemos pasar el ID del personaje
obtenrePlaneta(3)
