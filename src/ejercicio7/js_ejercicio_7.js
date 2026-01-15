console.log("Ejercicio 7: Generador de contraseñas");

let longitud = document.getElementById("length");
let generadorBtn = document.getElementById("generate");
let contraseña = document.getElementById("password");

function generarContraseña() {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let passwd = "";
    for (let i = 0; i < longitud.value; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        passwd += chars[randomIndex];
    }
    contraseña.innerText = passwd;
}

generadorBtn.addEventListener("click", generarContraseña);  
