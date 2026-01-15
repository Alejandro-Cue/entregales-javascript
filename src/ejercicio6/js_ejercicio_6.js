console.log("Ejercicio 6: Temporizador");

let temporizador = document.getElementById("display");
let iniciarBtn = document.getElementById("iniciar");
let pausarBtn = document.getElementById("pausar");
let reiniciarBtn = document.getElementById("reiniciar");

let milisegundos = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo;

function actualizarDisplay() {
    let ms = milisegundos < 10 ? "0" + milisegundos : milisegundos; 
    let seg = segundos < 10 ? "0" + segundos : segundos;
    let min = minutos < 10 ? "0" + minutos : minutos;
    let hr = horas < 10 ? "0" + horas : horas;
    temporizador.textContent = `${hr}:${min}:${seg}:${ms}`;
}

function iniciarTemporizador() {
    intervalo = setInterval(() => {
        milisegundos++;
        if (milisegundos === 100) {
            milisegundos = 0;
            segundos++;
        }
        if (segundos === 60) {
            segundos = 0;
            minutos++;
        }
        if (minutos === 60) {
            minutos = 0;
            horas++;
        }
        actualizarDisplay();
    }, 10);
    iniciarBtn.disabled = true;
    pausarBtn.disabled = false;     
}

function pausarTemporizador() {
    clearInterval(intervalo);
    iniciarBtn.disabled = false;
    pausarBtn.disabled = true;
}

function reiniciarTemporizador() {
    clearInterval(intervalo);
    milisegundos = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;
    actualizarDisplay();
    iniciarBtn.disabled = false;
    pausarBtn.disabled = true;
}

iniciarBtn.addEventListener("click", iniciarTemporizador);
pausarBtn.addEventListener("click", pausarTemporizador);
reiniciarBtn.addEventListener("click", reiniciarTemporizador);

actualizarDisplay();    