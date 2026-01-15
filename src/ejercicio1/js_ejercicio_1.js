console.log("Ejercicio 1: Cambio de color de fondo.");

let boton = document.getElementById("colorBtn");

boton.addEventListener("click", function() {
    let red = Math.floor(Math.random() * 255); //asigna un número aleatorio(random), redondeando(floor)
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}); 
