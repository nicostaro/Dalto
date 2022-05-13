const materiasHTML = document.querySelector(".materias");

const materias = [
    {
        nombre: "Fisica 4",
        nota: 7
    },
    {
        nombre: "Calculo 3",
        nota: 8
    },
    {
        nombre: "Bases de datos 3",
        nota: 9
    },
    {
        nombre: "Matemáticas disretas 2",
        nota: 7
    },
    {
        nombre: "Programación 4",
        nota: 8
    },
] 
    // para la consigna, esta información de arriba NO ESTÁ ACÁ, se le está solicitando a un servidor 
    //   en tiempo real, por lo que tardaría su TIEMPO en darla y el orden no sería si o si el de este array. Por eso voy a poner el setTimeout().

const obtenerMateria = (id) => {
    return new Promise ((resolve, reject)=>{ // convención de resolve, reject, pero podés poner cualquier cosa
       let materia = materias[id];
       if (materia == undefined) {
           reject ("lo siento, no existe la materia");
       }
       else { setTimeout(()=>{resolve(materia)},Math.random()*400)} /*resolve(materia) te devuelve materia si es que no es undefined, y el setTimeout, hace que te la devuelva en un tiempo random,
        como si viniera de otro lado. O sea, no van a estar en orden las materias */
    })
}


// obtenerMateria(1).then(res => console.log(res)) // así nos muestra el resultado;
// obtenerMateria(2).then(res => console.log(res)) 
// obtenerMateria(3).then(res => console.log(res)) 
// obtenerMateria(4).then(res => console.log(res)) 

const devolverMaterias = async () => {
    let materia = [];
    for (let i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMateria(i); // con esto espero a que llego materia [0] antes de ir a materia [1]
        console.log(materia[i]);
        let newHTMLCode = `
        <div class="materia">
            <div class="nombre">${materia[i]["nombre"]}</div>
            <div class="nota">${materia[i]["nota"]}</div>
        </div>`
        materiasHTML.innerHTML+=newHTMLCode;
    }
}

devolverMaterias();