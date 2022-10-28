/*preguntar en un formulario su sueldo
y mostrar en elemento el resultado de calcular el sueldo..*/

function calcularSueldoAnual(sueldoUsuario) {
  return sueldoUsuario * 12;
}
const BOTON_CALCULAR = document.querySelector("#calcularSalario");

BOTON_CALCULAR.onclick = function () {
  const SUELDO_USUARIO = Number(document.querySelector("#sueldo").value);
  console.log("me hicieron clik");
  document.querySelector("#salarioAnual").value =
    calcularSueldoAnual(SUELDO_USUARIO);
};

//capturar el contenido de etiqueta especifica
const NUESTRO_TITULO = document.querySelector("h1");
console.log(NUESTRO_TITULO.textContent);
//editar el estilo
NUESTRO_TITULO.style.backgroundColor = "#d1d1d1";
NUESTRO_TITULO.style.fontSize = "2em";
//cambio de titulo
NUESTRO_TITULO.textContent = "HOLA LOCASSO COMO VA TODO??";
//mostrar todo el contenido de la etiqueta "li"
const LISTA_LINKS = document.querySelectorAll("li");
function mostrarEnPantalla(mediaLinks) {
  for (let i = 0; i < mediaLinks.length; i++) {
    console.log(mediaLinks[i].textContent);
    mediaLinks[i].style.fontSize = "2em";
    mediaLinks[i].style.color = "red";
  }
}
mostrarEnPantalla(LISTA_LINKS);
//mostrar cantidad de "elementos" que contiene la etiqueta "li"
console.log(LISTA_LINKS.length);
