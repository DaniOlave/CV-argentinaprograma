/* crea una familia "acordeon" que va a contener a todos los elementos html que su clase sea "conenedor" */
const acordeon = document.getElementsByClassName('container');


/* para cada elemento de la familia "acordeon" agregarle un eventListener "click" que ejecuta  */
for (i=0; i<acordeon.length; i++) {
  acordeon[i].addEventListener('click', function () {
    this.classList.toggle('activa')
  })
}

