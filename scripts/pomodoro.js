// Recojo los elementos
const reloj = document.getElementById("reloj");
const counter= document.getElementById("counter");
const minutos=document.getElementById("minutos");
const segundos=document.getElementById("segundos");
const start=document.getElementById("start");
const stop=document.getElementById("stop");

// Selecciono elementos adicionales para notificaciones
const notificacion = document.getElementById("notificacion");
const mensajeNotificacion = document.getElementById("mensaje-notificacion");

// Interruptores de estado
let en_marcha = false;
let modo_curro = true;

// Variables numéricas
let minutos_int = 25;
let segundos_int = 0;
let intervalo;
let ciclos_counter=0;

// Función para mostrar notificaciones no bloqueantes
function mostrarNotificacion(mensaje) {
    mensajeNotificacion.innerText = mensaje;
    notificacion.classList.remove("oculto");
    
    // Ocultar después de 4 segundos
    setTimeout(() => {
        notificacion.classList.add("oculto");
    }, 4000);
}

// Función para cuenta atrás
function cuenta_atras() {
    if (segundos_int > 0) {
        segundos_int--;
    } else if (minutos_int > 0) {
        segundos_int = 59;
        minutos_int--;
    } else {
        // El tiempo se ha acabado
        if (modo_curro) {
            ciclos_counter++;
            counter.innerText = ciclos_counter;
            mostrarNotificacion("¡Ciclo de trabajo completado! Empieza descanso de 5 minutos.");
            
            // Cambiar a modo descanso
            modo_curro = false;
            minutos_int = 5;
            segundos_int = 0;
            document.body.style.backgroundColor = "lightgreen";
        } else {
            // Descanso termina -> modo_curro
            mostrarNotificacion("¡Descanso terminado! Vuelve un ciclo de 25 mins.");
            
            modo_curro = true;
            minutos_int = 25;
            segundos_int = 0;
            document.body.style.backgroundColor = ""; // Volver al BGcolor por defecto
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
