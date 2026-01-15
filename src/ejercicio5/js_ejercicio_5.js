console.log("Ejercicio 5: Calculadora básica");

let operando1 = document.getElementById("operando1");
let operando2 = document.getElementById("operando2");
const sumar = document.getElementById("suma");
const restar = document.getElementById("resta");
const multiplicar = document.getElementById("multiplicacion");
const dividir = document.getElementById("division");
let resultado = document.getElementById("resultado");

function suma() {
    const op1 = parseFloat(operando1.value);
    const op2 = parseFloat(operando2.value);
    if (isNaN(op1) || isNaN(op2) || operando1.value === "" || operando2.value === "") {
        return "Error: Ingresa números válidos";
    } else {
        return op1 + op2;
    }
}

function resta() {
    const op1 = parseFloat(operando1.value);
    const op2 = parseFloat(operando2.value);
    if (isNaN(op1) || isNaN(op2) || operando1.value === "" || operando2.value === "") {
        return "Error: Ingresa números válidos";
    } else {
        return op1 - op2;
    }
}

function multiplicacion() {
    const op1 = parseFloat(operando1.value);
    const op2 = parseFloat(operando2.value);
    if (isNaN(op1) || isNaN(op2) || operando1.value === "" || operando2.value === "") {
        return "Error: Ingresa números válidos";
    } else {
        return op1 * op2;
    }
    
}

function division() {
    const op1 = parseFloat(operando1.value);
    const op2 = parseFloat(operando2.value);
    if (isNaN(op1) || isNaN(op2) || operando1.value === "" || operando2.value === "") {
        return "Error: Ingresa números válidos";
    }
    if (op2 === 0) {
        return "Error: División por cero";
    } else {
        return op1 / op2;
    } 
    
}

sumar.addEventListener("click", function() {
    resultado.innerText = `Resultado: ${suma()}`;

});

restar.addEventListener("click", function() {       
    resultado.innerText = `Resultado: ${resta()}`;
});

multiplicar.addEventListener("click", function() {
    resultado.innerText = `Resultado: ${multiplicacion()}`;
});

dividir.addEventListener("click", function() {
    resultado.innerText = `Resultado: ${division()}`;
});         