const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = 450;
canvas.height = 600;

let barraArriba = {
    x : 185,
    y : 60,
    w: 80,
    h: 8,
    direccion : "right"
}

function generarBarraArriba() {
    ctx.fillStyle = "#000";
    ctx.fillRect(barraArriba.x, barraArriba.y, barraArriba.w, barraArriba.h);
}
// generarBarraArriba()

let barraAbajo = {
    x : 185,
    y : 536,
    w: 80,
    h: 8,
    direccion : "left"
}
function generarBarraAbajo() {
    ctx.fillStyle = "#000";
    ctx.fillRect(barraAbajo.x, barraAbajo.y, barraAbajo.w, barraAbajo.h);
}
// generarBarraAbajo()

let pelota = {
    x : 220,
    y : 295,
    w: 12,
    h: 12,
    direccion : "upright"
}

function generarPelota() {
    ctx.fillStyle = "#35f";
    ctx.fillRect(pelota.x, pelota.y, pelota.w, pelota.h);
}
// generarPelota()


function actualizarBarraArriba() {
    if (barraArriba.direccion == "right") {
        barraArriba.x += 3
    } else if (barraArriba.direccion == "left") {
        barraArriba.x-=3
    }
    if (barraArriba.x == 368) {
        barraArriba.direccion = "left"
    } else if (barraArriba.x == 2) {
        barraArriba.direccion = "right"
    }
    generarBarraArriba()
    setTimeout(()=> ctx.clearRect(barraArriba.x, barraArriba.y, barraArriba.w, barraArriba.h),0.1)
    
}

function actualizarBarraAbajo() {
    if (barraAbajo.direccion == "right") {
        barraAbajo.x += 3
    } else if (barraAbajo.direccion == "left") {
        barraAbajo.x-=3
    }
    if (barraAbajo.x == 368) {
        barraAbajo.direccion = "left"
    } else if (barraAbajo.x == 2) {
        barraAbajo.direccion = "right"
    }
    generarBarraAbajo()
    setTimeout(()=> ctx.clearRect(barraAbajo.x, barraAbajo.y, barraAbajo.w, barraAbajo.h),0.1)
    
}

addEventListener("keydown",(e)=>{
    if (queHacer = "jugar") {   
        if (e.key == "ArrowLeft") {
            barraAbajo.direccion = "left"
        } else if (e.key == "ArrowRight") {
            barraAbajo.direccion = "right"
        }
        if (e.key == "d") {
            barraArriba.direccion = "right"
        } else if (e.key == "a") {
            barraArriba.direccion = "left"
        }
    }
})

function actualizarPelota() {
    if (pelota.direccion == "downright") {
        pelota.x += 3;
        pelota.y += 2;
    } else if (pelota.direccion == "downleft") {
        pelota.x -= 3;
        pelota.y += 2;
    } else if (pelota.direccion == "upleft") {
        pelota.x -= 3;
        pelota.y -= 2;
    } else if (pelota.direccion == "upright") {
        pelota.x += 3;
        pelota.y -= 2;
    }

    if (pelota.x == 445) {
        if (pelota.direccion == "downright") {
            pelota.direccion = "downleft"
        } else if (pelota.direccion == "upright") {
            pelota.direccion = "upleft"
        }
    } else if (pelota.x == 1) {
        if (pelota.direccion == "downleft") {
            pelota.direccion = "downright"
        } else if (pelota.direccion == "upleft") {
            pelota.direccion = "upright"
        }
    } else if ((pelota.x >= barraAbajo.x) & (pelota.x <= barraAbajo.x + 81) & (pelota.y == barraAbajo.y - 7)) {
        if (pelota.direccion == "downright") {
            pelota.direccion = "upright"
        } else if (pelota.direccion == "downleft") {
            pelota.direccion = "upleft"
        }
    } else if ((pelota.x >= barraArriba.x) & (pelota.x <= barraArriba.x + 81) & (pelota.y == barraArriba.y + 7)) {
        if (pelota.direccion == "upright") {
            pelota.direccion = "downright"
        } else if (pelota.direccion == "upleft") {
            pelota.direccion = "downleft"
        }
    }

    generarPelota()
    setTimeout(()=> ctx.clearRect(pelota.x, pelota.y, pelota.w, pelota.h),0.1)
}


const h2Arriba = document.querySelector("#puntajearriba")
const h2Abajo = document.querySelector("#puntajeabajo")
const contador = document.querySelector("#contador")
const boton = document.querySelector("#boton")
const cg = document.querySelector("#cg")
let puntajeAbajo = 0;
let puntajeArriba = 0;
h2Abajo.textContent += puntajeAbajo;
h2Arriba.textContent += puntajeArriba;


let queHacer = "termino";
let quienGano;

function validarPunto() {
    if (pelota.y == 1) {
        puntajeAbajo++;
        h2Abajo.textContent = "Jugador 2: " + puntajeAbajo;
    } else if (pelota.y == 599) {
        puntajeArriba++;
        h2Arriba.textContent = "Jugador 1: " + puntajeArriba;
    }

    if ((pelota.y == 1)) {
        queHacer = "pausa"
        
        barraArriba = {
            x : 185,
            y : 60,
            w: 80,
            h: 8,
            direccion : "right"
        }
        barraAbajo = {
            x : 185,
            y : 536,
            w: 80,
            h: 8,
            direccion : "left"
        }
        pelota = {
            x : 220,
            y : 295,
            w: 12,
            h: 12,
            direccion : "upright"
        }
    } else if ((pelota.y == 599)) {
        queHacer = "pausa"

        barraArriba = {
            x : 185,
            y : 60,
            w: 80,
            h: 8,
            direccion : "right"
        }
        barraAbajo = {
            x : 185,
            y : 536,
            w: 80,
            h: 8,
            direccion : "left"
        }
        pelota = {
            x : 220,
            y : 295,
            w: 12,
            h: 12,
            direccion : "downleft"
        }
    }else {
        queHacer = "jugar"
    }

    if (puntajeAbajo == 7) {
        quienGano = "Jugador 2"
        queHacer = "termino"
    } else if (puntajeArriba == 7) {
        quienGano = "Jugador 1"
        queHacer = "termino"
    }
}


function jugar() {
    if (queHacer == "jugar") {
        actualizarBarraAbajo()
        actualizarBarraArriba()
        actualizarPelota()
        validarPunto()
        requestAnimationFrame(jugar)
    } else if (queHacer == "pausa") {
        ctx.clearRect(0,0,canvas.width,canvas.height)
        setTimeout(()=>{
            setTimeout(()=> contador.textContent = 3,0)
            setTimeout(()=> contador.textContent = 2,1000)
            setTimeout(()=> contador.textContent = 1,2000)
            setTimeout(()=> contador.textContent = "",3000)
            setTimeout(()=> queHacer = "jugar",3200)
            setTimeout(()=> requestAnimationFrame(jugar),3200)
            
        },500)
    } else if (queHacer == "termino") {
        cg.classList.remove("cgnovisible")
        cg.classList.add("cgvisible")
        if (quienGano == "Jugador 1") {
            cg.textContent = "Jugador 1 ganó"
        } else if (quienGano == "Jugador 2") {
            cg.textContent = "Jugador 2 ganó"
        }
        setTimeout(()=>{
            cg.classList.remove("cgvisible")
            cg.classList.add("cgnovisible")
            boton.classList.remove("btnnovisible")
            boton.classList.add("btnvisible")
        },3000)
    }   
}

boton.addEventListener("click",()=>{
    boton.classList.remove("btnvisible")
    boton.classList.add("btnnovisible")
    queHacer = "pausa";
    puntajeAbajo = 0;
    puntajeArriba = 0;
    h2Abajo.textContent = "Jugador 2: " + puntajeAbajo;
    h2Arriba.textContent = "Jugador 1: " + puntajeArriba;
    
    jugar()
})





