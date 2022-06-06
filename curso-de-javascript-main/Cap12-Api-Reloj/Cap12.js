"use stirct"; // si no ponés exactamente todo bien, javascrpit no te la deja pasar

const agregarCero = n =>  (n<10 ? n="0"+n : n) // si n es menor a 10, agregarle un 0, si no, devolver n.
                    // no va entre llaves cuando se escribe así el IF, va entre paréntesis o en este caso se podía sin nada.


let actualizarHora = () =>{
    const time = new Date(); //Date es una API interna de JS, al hacer el new, le podés agregar cosas
    let hora = agregarCero(time.getHours());
    let min = agregarCero(time.getMinutes());
    let seg = agregarCero(time.getSeconds());
    console.log(seg);
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".min").textContent = min;
    document.querySelector(".seg").textContent = seg;
}

actualizarHora(); //la ejecuto primero, porque si no, va a tardar 1 seg en ejecutarse al cargar la pág.

setInterval(actualizarHora,1000); //se ejecuta cada 1000ms, o sea, 1 seg.
//setInterval NO SE USA MÁS porque consume muchos recursos, ahora se usan librerías.

