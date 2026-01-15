console.log("Ejercicio 4: Filtro de búsqueda a tiempo real");

let placeholder = document.getElementById("searchInput");
let lista = document.getElementById("itemList");

placeholder.addEventListener("input", function() {
    let filtro = placeholder.value.toLowerCase();
    let items = lista.getElementsByTagName("li");

    for (let i = 0; i < items.length; i++) {
        let itemTexto = items[i].textContent 
        if (itemTexto.toLowerCase().indexOf(filtro) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
});