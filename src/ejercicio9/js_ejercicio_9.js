console.log("Ejercicio 8: Lista de Tareas con LocalStorage");

const input = document.getElementById("nuevaTarea");
const botonAgregar = document.getElementById("agregarTarea-btn");
const listaTareas = document.getElementById("listaTareas");
const botonEliminarTodas = document.getElementById("limpiarTareas-btn");

function getTareas() {
    const tareas = localStorage.getItem("tareas");
    return tareas ? JSON.parse(tareas) : [];
}

function guardarTareas(tareas) {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function agregarTarea(tarea) {
    const tareas = getTareas();
    tareas.push(tarea);
    guardarTareas(tareas);
    renderizarTareas();
}

//Modificado para eliminar sólo las completadas
function limpiarTareas() {
    let tareas = getTareas();
    tareas = tareas.filter(tarea => !tarea.completada); //Mantenemos las tareas no completadas
    guardarTareas(tareas);
    renderizarTareas();
}

function renderizarTareas() {
    listaTareas.innerHTML = "";
    const tareas = getTareas();

    tareas.forEach((tarea, index) => {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarea.completada;
        checkbox.addEventListener("change", () => {
            tarea.completada = checkbox.checked;
            guardarTareas(tareas);
            span.style.textDecoration = checkbox.checked ? "line-through" : "none";
        });

        const span = document.createElement("span");
        span.textContent = tarea.texto;
        //Si la tarea está completada, text-decoration: "line-through", si no, text-decoration: "none"
        span.style.textDecoration = tarea.completada ? "line-through" : "none"; 
        li.appendChild(checkbox);
        li.appendChild(span);
        listaTareas.appendChild(li);
    });
}

botonAgregar.addEventListener("click", () => {
    const tarea = input.value;
    if (tarea) {
        const tareas = getTareas();
        tareas.push({ texto: tarea, completada: false });
        guardarTareas(tareas);
        renderizarTareas();
        input.value = "";
    }
});

botonEliminarTodas.addEventListener("click", limpiarTareas);

renderizarTareas();