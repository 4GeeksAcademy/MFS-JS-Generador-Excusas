import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

};
let quien = ['Mi perro', 'Mi hermano', 'Mi esposa', 'El gato'];
let accion = ['se comió', 'quemó', 'aplastó', 'destrozó'];
let que = ['mi tarea', 'mi teléfono', 'mi informe', 'mi computador'];
let cuando = ['anoche', 'mientras dormía', 'ayer', 'el fin de semana'];

function generadorexcusas(quien, accion, que, cuando) {
  let numquien = Math.floor(Math.random() * quien.length);
  let numaccion = Math.floor(Math.random() * accion.length);
  let numque = Math.floor(Math.random() * que.length);
  let numcuando = Math.floor(Math.random() * cuando.length);

  return quien[numquien] + " " + accion[numaccion] + " " + que[numque] + " " + cuando[numcuando];
}

function onLoad() {
  let excusa = document.getElementById('excuse');
  excusa.innerHTML = generadorexcusas(quien, accion, que, cuando);
}

window.onload = onLoad;