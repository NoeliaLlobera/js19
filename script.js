let encendido = false;
let encender = () => {
    let x = document.getElementById("interruptor");
    let y = document.getElementById("bombilla");
    if(encendido == false){
        encendido = true;
        x.src= "./imgs/bon.jpg";
        y.src= "./imgs/on.jpg";
        for(let i=0; i<4; i++){
           let a = document.getElementsByClassName("esconderApagado")[i];
           a.style.display= "block";
        }
    } else {
        encendido = false;
        x.src= "./imgs/boff.jpg";
        y.src = "./imgs/off.jpg";
        for(let i=0; i<4; i++){
            let a = document.getElementsByClassName("esconderApagado")[i];
            a.style.display= "none";
         }
    }
}

let zoom = () =>{
    let x = document.getElementById("barraZoom").value;
    let bombilla = document.getElementById("bombilla");
    switch (x){
        case '3':
            bombilla.style.width="480px";
            break;
        case '2':
            bombilla.style.width="440px";
            break;
        case '1':
            bombilla.style.width="400px";
            break;
        case '0':
            bombilla.style.width = "360px";
            break;
        case '4':
            bombilla.style.width = "520px"
            break;
        case '5':
            bombilla.style.width = "560px"
    }
}

let nivel = () =>{
    let x = document.getElementById("barraNivel").value;
    let bombilla = document.getElementById("bombilla");
    switch (x){
        case '3':
            bombilla.style.opacity="0.8";
            break;
        case '2':
            bombilla.style.opacity="0.7.";
            break;
        case '1':
            bombilla.style.opacity="0.6";
            break;
        case '0':
            bombilla.style.opacity = "0.5";
            break;
        case '4':
            bombilla.style.opacity = "0.9"
            break;
        case '5':
            bombilla.style.opacity = "1"
    }
}