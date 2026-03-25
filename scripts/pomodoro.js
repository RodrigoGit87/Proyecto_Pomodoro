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
let en_marcha=false;
let modo_curro=true;
//variables numericas
let minutos_int=25;
let segundos_int=0;
let intervalo;
let ciclos_counter=0;

//Funcion para cuenta atrrás
function cuenta_atras(){
    if(segundos_int > 0) segundos_int--;
    else if(minutos_int>0){
        segundos_int=59;
        minutos_int--;
    } else {
        alert(`Ciclo de trabajo completado`);
        if(modo_curro){
            ciclos_counter++;
            counter.innerText=ciclos_counter
        
        alert(`Empieza descanso de 5 minutos`)
        //Cambiar a modo descanso
        modo_curro=false
        //resetear valor de minutos a 5
        minutos_int=5;
        segundos_int=0;
        //detalle estetico
        document.body.style.backgroundColor = "lightgreen";
        } else{
            //Descanso termina -> modo curro
            alert(`Descanso terminado.Vuelve un ciclo de 25mins.`)
            modo_curro=true;
            //volver a setear los valores del modo trabajo
            minutos_int=25;
            segundos_int=0;
            //Resetear el color de trabajo
            document.body.style.backgroundColor="";//Cogerá el BG del body por defecto de mi css
        }
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
