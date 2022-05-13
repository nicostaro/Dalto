const sendButton = document.getElementById("send-grade");
///no es lo ideal usar try y catch pero es para entender la idea

sendButton.addEventListener("click", ()=>{
    let prevResult,result, mssg;
    try {
        prevResult = parseInt(document.getElementById("grade").value);
        if (isNaN(prevResult)){
            throw "Error" ///cuando sea NaN va a ser un error, por lo que se va ir a lo que dice el "catch" de abajo
        }
         mssg= defineMsg (prevResult); /// mensaje si es que no hay error
         result = verify (prevResult);
    } catch (error){ ///error se pone por convención (o "e") pero podés poner lo que quieras
        result = "Nico Error"
        mssg = "Found an error"
    }
    openModal (result, mssg);

})


const defineMsg = (pr) =>{
    
    switch (pr){
        case 1 : result = "Worst grade"
        break;
        case 2 : result = "too bad"
        break;
        case 3 : result = "bad"
        break;
        case 4 : result = "can do better"
        break;
        case 5 : result = "half"
        break;
        case 6 : result = "almost"
        break;
        case 7 : result = "yeah"
        break;
        case 8 : result = "very good"
        break;
        case 9 : result = "Wow"
        break;
        case 10 : result = "Nerd"
        break;
        default:  prevResult=NaN;
        
    }
    return result;
}


const verify=(prev)=>{
    if (prev<7){
        return "Failed"
    }
    else {return "Approved"}
}


const openModal = (res,msg)=>{
    document.querySelector(".result").innerHTML = res;
    document.querySelector(".message").innerHTML = msg;
    let modal = document.querySelector(".modal-background");
    modal.style.animation = "appear 1s forwards";
    modal.style.display = "flex";

}

