var teclas =
{
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

var pixels = 40;

// Coordenadas iniciales del lechon
var lechon_X = 200;
var lechon_Y = 200;

var lechon = new Animales("lechon", "img/cerdo.png", lechon_X, lechon_Y);

// Instancia del lechon
lechon.imagen = new Image();
lechon.imagen.src = lechon.url;


// Funciones por el movimiento del personaje principal
const movimiento = (e) => {
  var caminar = true;
  var operacion;

  switch (e.keyCode)  {
    case teclas.LEFT:
      // Left resta en el eje X
      operacion = "l";
      lechon_X = lechon_X - pixels;
      comprobante(caminar, operacion);
    break;
    case teclas.UP:
      // Up resta en el eje Y
      operacion = "u";
      lechon_Y = lechon_Y - pixels;
      comprobante(caminar, operacion);
    break;
    case teclas.RIGHT:
      // Right suma en el eje X
      operacion = "r";
      lechon_X = lechon_X + pixels;
      comprobante(caminar, operacion);
    break;
    case teclas.DOWN:
      // Down suma en el eje Y
      operacion = "d";
      lechon_Y = lechon_Y + pixels;
      comprobante(caminar, operacion);
    break;
  }
}


// Comprueba si la ´posicion hacia la que se mueve esta ocupada o fuera de los limites del canvas
const comprobante = (caminar, operacion) => {
  for (var i = 1; i < all_animals.length; i++) {

    if (lechon_X == all_animals[i].posicion_x && lechon_Y == all_animals[i].posicion_y || lechon_X < 0 || lechon_Y < 0 || lechon_X > 420 || lechon_Y > 420)  {

      switch (operacion)  {
        case "l":
          // Left resta en el eje X
          lechon_X = lechon_X + pixels;
        break;
        case "u":
          // Up resta en el eje Y
          lechon_Y = lechon_Y + pixels;
        break;
        case "r":
          // Right suma en el eje X
          lechon_X = lechon_X - pixels;
        break;
        case "d":
          // Down suma en el eje Y
          lechon_Y = lechon_Y - pixels;
        break;
      }

      caminar = false;
    }
  } 
  

  // Comprueba si se aprobo el movimiento del cerdo y llama al renderizado con la modificacion de la posicion
  if (caminar == true) {
    if (lechon_X + 40 == coin_coordenadas[0] && lechon_Y + 40 == coin_coordenadas[1]) {
      new_coin = true;    
      contador_monedas++;
    }
    dibujar();
  }
}


document.addEventListener("keydown", movimiento);