// aqui guardamos los animales para despues
var all_animals = [];
// Aca conseguimos el contexto del canvas
var miCanvas = document.getElementById("villaplatzi");
var ctxCanvas= miCanvas.getContext("2d");
// parametro basicos
var maximo_cuadricula = 5;
var minimo_cuadricula = 0;
var multiplicador_cuadricula = 80;
var maximo_animales = 8;
var minimo_animales = 2;
var segundos = 10;

// setInterval(() => {
//   llenar_array();
// }, segundos * 1000)



// Crea los animales dentro del array all_animals, cada uno con su respectiva ubicacion
// particular, su nombre y url que luego sera usada como src del objeto Image
const llenar_array = () => {
  all_animals = [];

  agregar_fondo();

  // calculemos cuantas vacas, cerdos y pollos agregaremos
  var cantidad_vacas = aleatorio(maximo_animales, minimo_animales);
  for (let i = 1; i <= cantidad_vacas; i++){
    agregar_coordenadas("vaca", "img/vaca.png");
  }
  
  var cantidad_cerdos = aleatorio(maximo_animales, minimo_animales);
  for (let i = 1; i <= cantidad_cerdos; i++){
    agregar_coordenadas("cerdo", "img/cerdo.png");
  }
  
  var cantidad_pollos = aleatorio(maximo_animales, minimo_animales);
  for (let i = 1; i <= cantidad_pollos; i++){
    agregar_coordenadas("pollo", "img/pollo.png");
  }

  cargar_imagenes();
}


const agregar_fondo = () => {
  all_animals.push( new Animales("Fondo", "img/tile.png", 0, 0) );
}


const agregar_coordenadas = (nombre, url) => {
  let coordenadas = coordenadas_generator()
  all_animals.push( new Animales(nombre, url, coordenadas[0], coordenadas[1]) ); 
}


const coordenadas_generator = () => {
  let contador;

  do {
    contador = 0;

    for (let i = 1; i < all_animals.length; i++) {
      if (x == all_animals[i].posicion_x && y == all_animals[i].posicion_y) {
        var y = ( aleatorio(maximo_cuadricula, minimo_cuadricula) * multiplicador_cuadricula );
        var x = ( aleatorio(maximo_cuadricula, minimo_cuadricula) * multiplicador_cuadricula );
      } else {
        contador++
      }
    }
  } while (contador !== all_animals.length - 1)

  return [x, y]
}


// Con esta funcion que se dispara al final de la function llenar_array,
// cargamos el objeto Image dentro del cada uno de los objetos all_animals para
// asi poder llamarlos y dibujarlos con drawImage()
const cargar_imagenes = () => {
  for (var i = 0; i < all_animals.length; i++) {
    all_animals[i].imagen = new Image();
    all_animals[i].imagen.src = all_animals[i].url;
    all_animals[i].imagen.addEventListener("load", dibujar);
  }
}


// Aca imprimimos todas las imagenes cada vez que alguna carga, en orden
const dibujar = () => {
  // Dibuja los elementos del array principal
  for (var i = 0; i < all_animals.length; i++) {
    ctxCanvas.drawImage(all_animals[i].imagen, all_animals[i].posicion_x, all_animals[i].posicion_y);
  }
  // Dibujamos al personaje movil
  ctxCanvas.drawImage(lechon.imagen, lechon_X, lechon_Y);
  // Dibujar la moneda
  farm_coin();
}

// Esta funcion devulve un numero random segun el margen dado en el parametro
const aleatorio = (max, min) => {
  z = Math.floor(Math.random() * (max - min + 1)) + min;
  return z;
}

window.addEventListener("load", llenar_array);