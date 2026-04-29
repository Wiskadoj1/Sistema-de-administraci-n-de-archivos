//Codigo implementado de JS

function login(){
    let divMensaje = document.querySelector('#mensaje');

    let usuario = document.querySelectorAll('.formularioCampo')[0].value;
    console.log(document.querySelectorAll('.formularioCampo')[0].value);
    let contra = document.querySelectorAll('.formularioCampo')[1].value;

    if(usuario =="admin" && contra == "123"){ 
        localStorage.setItem("usuario", usuario);
        window.location.href = "/pages/principal.html"
        divMensaje.innerHTML = "Bienvenido al sistema" + usuario;
    }else{
        divMensaje.innerHTML = "Saquese de aqui " + usuario;
    }
}
const btnIngresar = document.getElementById('btnIngresar');
btnIngresar.addEventListener("click", login)