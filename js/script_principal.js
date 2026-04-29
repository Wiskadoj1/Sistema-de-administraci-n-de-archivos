let usuario = localStorage.getItem("usuario") || "";
document.getElementById("bienvenida").innerHTML = "Bienvenido al sistema " + usuario;
function cerrarSesion(){
    localStorage.removeItem("usuario");
    window.location.href = "/index.html";
}
document.getElementById("btnCerrarSesion").addEventListener("click", cerrarSesion)