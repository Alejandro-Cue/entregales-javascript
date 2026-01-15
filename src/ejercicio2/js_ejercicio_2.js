console.log("Ejercicio 2: Contador de clicks");

let boton = document.getElementById("clickBtn");
let contador = document.getElementById("clickCount");

boton.addEventListener("click", () => {
    let count = parseInt(contador.innerText.split(": ")[1]);
    count += 1;
    contador.innerText = `Número de Clicks: ${count}`;
});
