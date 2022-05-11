const name = document.getElementById("name"); 
const mail = document.getElementById("mail");
const owed = document.getElementById("owed");
const button = document.getElementById("btn-1");
const result = document.querySelector(".result") /*selecciona la clase "result"*/

/*Cuando al botón se le de click, se ejecute una función 
la variable de la función se pone "e". Se suele poner "e" o "event" o algo parecido
por convención, porque habla del evento justamente.*/
button.addEventListener("click",(e)=>{
    e.preventDefault() /*Previene el comportamiento por defecto, el cual es actualizar la pag
    si le doy click al "Send", NO se actualiza la página */
    let error = validateFields();
    if (error[0]){
        result.innerHTML = error[1]; /*el innerHTML te reemplaza el texto dentro de result (que es un div en este caso)*/
        result.classList.add("red");
    }
    else{
        result.innerHTML = "Accepted";
        result.classList.add("green");/*le agrega la clase "green"*/
        result.classList.remove("red"); /*por si antes había tenido error y se le ponía esta clase*/
     }
})

const validateFields = ()=>{
    let error = [];
    if (name.value.length <5 || name.value.length >40){
        error[0]=true;
        error[1]= "The name must have between 5 and 40 letters"
        return error;
    }
    else if (mail.value.indexOf("@")==-1 ||mail.value.indexOf(".")==-1){
        error[0]=true;
        error[1]= "Not a valid email";
        /*esto se pone porque desde consola uno puede sacar el input=mail y así mandar algo que no sea un mail */
        return error;
    }
    
    error[0]=false;
    return error;
    
}

///Se debería hacer con Regexp pero no era para ver eso igual