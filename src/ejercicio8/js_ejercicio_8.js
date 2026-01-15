console.log("Ejercicio 8: Contador de Palabras y Caracteres");

const muestra = document.getElementById("campoTexto");
const contadorPalabras = document.getElementById("contPalabras");
const contadorCaracteres = document.getElementById("contCaracteres");

muestra.addEventListener("input", () => {
    const textoOriginal = muestra.value;
    const caracteres = textoOriginal.replace(/\s+/g, "").length;

    const palabras = textoOriginal.split(/\s+/).filter(palabra => palabra.length > 0).length;

    contadorPalabras.textContent = `Palabras: ${palabras}`;
    contadorCaracteres.textContent = `Caracteres: ${caracteres}`;
});
