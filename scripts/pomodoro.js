//Recogo los elementos
const reloj = document.getElementById("reloj");
const counter= document.getElementById("counter");
const minutos=document.getElementById("minutos");
const segundos=document.getElementById("segundos");
const start=document.getElementById("start");
const stop=document.getElementById("stop");

//interruptor booleano
let tiempo_ciclo =false;
let tiempo_descanso = false;
//variables numericas
let minutos_int=25;
let segundos_int=0;
let intervalo;
let en_marcha=false;

//Funcion para cuenta atrrás
function cuenta_atras(){
    if(segundos_int > 0) segundos_int--;
    else if(minutos_int>0){
        segundos_int=59;
        minutos_int--;
    } else {
        alert(`Ciclo de trabajo completado`);
        clearInterval(intervalo);
        en_marcha=false;
        return;
    } 

    minutos.innerText = minutos_int<10 ? "0"+minutos_int : minutos_int
    segundos.innerText=segundos_int<10 ? "0"+segundos_int : segundos_int
}

//iniciar el reloj
start.addEventListener("click", ()=>{
    if(en_marcha==false){
        en_marcha=true;
        //llamar a la funcion q empieza la cuenta atrás
        intervalo=setInterval(cuenta_atras, 1000)
    }
});
//parar el reloj
stop.addEventListener("click", () => {
    clearInterval(intervalo);
    en_marcha=false;
})
