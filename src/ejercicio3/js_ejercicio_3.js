console.log("Ejercicio 3: Creador de listas dinámicas");

let campoTexto = document.querySelector("textarea");
let botonAgregar = document.getElementById("agregarElemento");
let lista = document.querySelector("ul");

botonAgregar.addEventListener("click", function() {
    let texto = campoTexto.value;
    if (texto !== "" && !texto.includes("\n")) {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = texto;
        nuevoElemento.innerHTML += ' <button class="eliminar">Eliminar</button>';

        // Agregar funcionalidad al botón de eliminar
        nuevoElemento.querySelector(".eliminar").addEventListener("click", function() {
            lista.removeChild(nuevoElemento);
        });
        lista.appendChild(nuevoElemento);
        campoTexto.value = "";
    } else {
        alert("Por favor, ingresa un texto válido o los elementos de uno en uno.");
    }
});