var contenedorcancha = document.getElementById("contenedorcancha");
var ancho = contenedorcancha.clientWidth;
var contenedorcolores = document.getElementById("colorescancha");
var contenedorcoloresancho = contenedorcolores.clientWidth;
var colores = document.querySelectorAll(".colores");
var medio = document.getElementById("medio");
var costados = document.getElementsByClassName("costados"); 

contenedorcancha.style.height = ancho / 3 + "px";

contenedorcolores.style.height = contenedorcoloresancho / 4 + "px";

window.addEventListener("resize", function () {
    ancho = contenedorcancha.clientWidth
    contenedorcancha.style.height = ancho / 3 + "px"
    var contenedorcoloresancho = contenedorcolores.clientWidth;
    contenedorcolores.style.height = contenedorcoloresancho / 4 + "px";
})

colores.forEach(boton => {
    boton.addEventListener("click", function () {
        var data = boton.getAttribute("data-name")

        switch (data) {
            case "arcilla":
                document.body.style.backgroundColor = "#c93c20"
                medio.style.backgroundColor = "#c93c20"
                for (var i = 0; i < costados.length; i++) {
                    costados[i].style.backgroundColor = "#c93c20"
                }
                break;
            case "pasto":
                document.body.style.backgroundColor = "#2d572c"
                medio.style.backgroundColor = "#72a63d"
                for (var i = 0; i < costados.length; i++) {
                    costados[i].style.backgroundColor = "#72a63d"
                }
                break;
            case "azul":
                document.body.style.backgroundColor = "#1e88e5"
                medio.style.backgroundColor = "#64a1e1"
                for (var i = 0; i < costados.length; i++) {
                    costados[i].style.backgroundColor = "#64a1e1"
                }
                break;
            case"pastoazul":
                document.body.style.backgroundColor = "#72a63d"
                medio.style.backgroundColor = "#1e88e5"
                for (var i = 0; i < costados.length; i++) {
                    costados[i].style.backgroundColor = "#1e88e5"
                }
                break;
        }
    })
});




