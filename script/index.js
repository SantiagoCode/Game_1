// aqui guardamos los animales para despues
var all_animals = [];
// ubicaiones de animales para poder hacer comparaciones de posicion
var ubicaciones_x = [];
var ubicaciones_y = [];
// Aca conseguimos el contexto del canvas
var miCanvas = document.getElementById("villaplatzi");
var ctxCanvas= miCanvas.getContext("2d");

var maximo_cuadricula = 11;
var minimo_cuadricula = 0;
var multiplicador_cuadricula = 40;

var maximo_animales = 8;
var minimo_animales = 2;

// Con esta funcion (cuantos_animales) que llama la ventana al cargarse crearemos
// los animales dentro del arry all_animals, cada uno con su respectiva ubicacion
// particular, su nombre y url que luego sera usada como src del objeto Image
window.addEventListener("load", cuantos_animales);

function cuantos_animales()
{
  // Segun el orden del array primero va el fondo para que sea lo primero
  // en dibujarse y asi todos los animales se dibujen sobre este
  cargar_fondo();

  // calculemos cuantas vacas
  var cantidad_vacas = aleatorio(maximo_animales, minimo_animales);
  for (var i = 1; i <= cantidad_vacas; i++)
  {
    ubicar_animales("vaca", "img/vaca.png");
  }
  // calculemos cuantas cerdos
  var cantidad_cerdos = aleatorio(maximo_animales, minimo_animales);
  for (var i = 1; i <= cantidad_cerdos; i++)
  {
    ubicar_animales("cerdo", "img/cerdo.png");
  }
  // calculemos cuantas vacas
  var cantidad_pollos = aleatorio(maximo_animales, minimo_animales);
  for (var i = 1; i <= cantidad_pollos; i++)
  {
    ubicar_animales("pollo", "img/pollo.png");
  }


  cargar_imagenes();
}

function ubicar_animales(nombre, url)
{
  var x = ( aleatorio(maximo_cuadricula, minimo_cuadricula) * multiplicador_cuadricula ) + 20;
  var y = ( aleatorio(maximo_cuadricula, minimo_cuadricula) * multiplicador_cuadricula ) + 20;

  // Asi marcamos los margenes maximos en x y y
  if (x >= 400)
  {
    x = 420;
  }
  if (y >= 400)
  {
    y = 420;
  }
  if (x == 220 && y == 220)
  {
    x = x + 80;
    y = y + 80;
  }

  var ubicacion_x = x;
  ubicaciones_x.push( ubicacion_x );

  var ubicacion_y = y;
  ubicaciones_y.push( ubicacion_y );

  all_animals.push( new Animales(nombre, url, x, y) );
}

// Con cargar_fondo que se llama al inicio de la function cuantos_animales, agragamos
// el fondo en la posicion 0 ( all_animals[0] )
function cargar_fondo()
{
  all_animals.push( new Animales("Fondo", "img/tile.png", 0, 0) );
}

// Con esta funcion que se dispara al final de la function cuantos_animales,
// cargamos el objeto Image dentro del cada uno de los objetos all_animals para
// asi poder llamarlos y dibujarlos con drawImage()
function cargar_imagenes()
{
  for (var i = 0; i < all_animals.length; i++)
  {
    all_animals[i].imagen = new Image();
    all_animals[i].imagen.src = all_animals[i].url;
    all_animals[i].imagen.addEventListener("load", dibujar);
  }
}

// Aca imprimimos todas las imagenes cada vez que alguna carga, en orden,
// iniciando con el fondo hasta el ultimo animal y luego el Lechon caminante
function dibujar()
{
  for (var i = 0; i < all_animals.length; i++)
  {
    ctxCanvas.drawImage(all_animals[i].imagen, all_animals[i].posicion_x, all_animals[i].posicion_y);
  }

  ctxCanvas.drawImage(lechon.imagen, lechon_X, lechon_Y);
}

// Esta funcion devulve un numero random segun el margen dado en el parametro
function aleatorio(max, min)
{
  z = Math.floor(Math.random() * (max - min + 1)) + min;
  return z;
}
