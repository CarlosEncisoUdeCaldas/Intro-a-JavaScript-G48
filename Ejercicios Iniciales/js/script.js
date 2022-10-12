

// funcion para ocultar elementos
// function ocultarElemento(){
//   document.getElementById('hidden').style.display = 'none';
// }

//funcion para mostrar los elementos
function mostrarElemento(valor) {
  document.getElementById("hidden").style.display = valor;
}

//funcion para cambiar el tamaño
function cambiarFont(valor) {
  document.getElementById("estilo").style.fontSize = valor;
}

//funcion para cambiar el contenido
function cambiarContenido(valor) {
  document.getElementById("demo").innerHTML = valor;
}

//Encender y apagar un bombillo
// function encendido() {
//   document.getElementById("miImagen").src = "img/on.gif";
// }

// function apagado() {
//     document.getElementById("miImagen").src = "img/off.gif";
// }

//la funcion encendido y apagado la puedo cambiar por unsa sola funcion con parametros
function OnOff( ruta ){
    document.getElementById("miImagen").src = ruta;
}
//sintaxis tipo flecha de la funcion apagado
// const apagado = () => document.getElementById('miImagen').src = 'img/off.gif';

// funcion unica del bombillo
// function OnOff( valor ) {

// }

function useWrite(){
    document.write('Hola Mundo')
}

function buttonAlert(){
    window.alert('Bienvenido a la salida Alerta')
}

