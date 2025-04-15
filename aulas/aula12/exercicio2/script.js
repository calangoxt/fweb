alert("ola")
var titulo = document.querySelector("#titulo");
function mostrarAlert() {
    titulo.textContent = "novo titulo";
    titulo.style.color = "red";
    alert("vc apertou no titulo")
} titulo.onclick = mostrarAlert;
