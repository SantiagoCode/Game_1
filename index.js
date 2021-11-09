var miCanvas = document.getElementById("villaplatzi");
var ctxCanvas= miCanvas.getContext("2d");

// ESTOS SON LOS OBJETOS LITERALES QUE CONTIENEN LAS IMAGENES DEL FONDO Y LOS ANIMALES
var fondo = {
  url: "tile.png",
  cargado: false
};
var vacas = {
  url: "vaca.png",
  cargado: false
};

// fondo o mapa
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);
// vacas
vacas.imagen = new Image();
vacas.imagen.src = vacas.url;
vacas.imagen.addEventListener("load", cargarVacas);

function cargarFondo()
{
  fondo.cargado = true;
  dibujar();
}

function cargarVacas()
{
  vacas.cargado = true;
  dibujar();
}

var numero_vacas = aleatorio(5, 2);

// ESTA ES LA FUNCION QUE HARA TODO EL DIBUJO CADA VEZ QUE UN ELEMENTO CARGUE
function dibujar()
{
  if (fondo.cargado) {
    ctxCanvas.drawImage(fondo.imagen, 0, 0);
  }
  if (vacas.cargado) {
    for (var i = 1; i <= numero_vacas; i++) {
      // 420 es el resultado de la anchura del canvas menos el tamaño de los animales. Esto para que no salgan del "margen"
      var x = aleatorio(7, 1) * 60;
      var y = aleatorio(7, 1) * 60;
      ctxCanvas.drawImage(vacas.imagen, x, y);

      console.log(i, x, y);
    }
  }
}

// ESTA ES LA FUNCION QUE DEVUELVE NUMEROS ALEATORIOS CON UN RANGO
function aleatorio(max, min)
{
  z = Math.floor(Math.random() * (max - min + 1)) + min;
  return z;
}
