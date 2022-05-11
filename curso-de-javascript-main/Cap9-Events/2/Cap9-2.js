const students = [{
    name: "Nico Staro",
    mail: "nicostaro_93@hotmail.com",
    classroom: "Fisic", 
},{
    name: "Karin Guerra",
    mail: "karin@hotmail.com",
    classroom: "Math", 
},{
    name: "Jorge Ramirez",
    mail: "ramirez@hotmail.com",
    classroom: "Music", 
},{
    name: "Facundo Roberto",
    mail: "robert@hotmail.com",
    classroom: "History", 
},{
    name: "Paca Paca",
    mail: "pacapaca@hotmail.com",
    classroom: "Gym", 
}];


const button = document.querySelector(".btn-confirm");
const container = document.querySelector(".grid-container");
let hmtlCode ="";

for (student in students){
    let data = students[student];
    let name = data["name"];
    let mail = data["mail"];
    let classroom = data["classroom"];
    hmtlCode += `
        <div class="grid-item name">${name}</div>
        <div class="grid-item mail">${mail}</div>
        <div class="grid-item classroom">${classroom}</div>
        <div class="grid-item week">
            <select class="week-choice">
                <option value="Week 1">Week 1</option>
                <option value="Week 2">Week 2</option>
            </select>
        </div>`
    
}
container.innerHTML = hmtlCode;
    /*esto lo que dice es a la clase grid-container cambiale lo que tiene adentro por html code
    y bueno, como htmlCode es un for in, le pongo el += para que vaya sumando.
    Si pusiera solo = en vez de +=, sólo me pondría el último elemento del array */
button.addEventListener("click", ()=>{
    let confirmation = confirm("do you really want to confirm?");
    if (confirmation){ 
    document.body.removeChild(button); ///si se confirma, se elimina el boton
    let elements = document.querySelectorAll(".week");
    let chocenWeeks = document.querySelectorAll(".week-choice");
    for (element in elements){
        let week = elements[element];
        week.innerHTML = chocenWeeks[element].value;
    } /*al hacer click, y aceptar la confirmación,
     me ponga como texto el valor elegido de la semana*/
    }

})