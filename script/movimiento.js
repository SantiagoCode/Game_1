var teclas =
{
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
var lechon_X = 210;
var lechon_Y = 210;
var pixels = 40;
var lechon = new Animales("lechon", "img/cerdo.png", lechon_X, lechon_Y);

// lechon para navidad
lechon.imagen = new Image();
lechon.imagen.src = lechon.url;

document.addEventListener("keydown", movimiento);


function movimiento(evento)
{
  var caminar = true;
  var operacion;

    switch (evento.keyCode)
    {
      case teclas.LEFT:
        // Left resta en el eje X
        operacion = "l";
        lechon_X = lechon_X - pixels;
        comprobante(caminar, lechon_X, operacion);
      break;
      case teclas.UP:
        // Up resta en el eje Y
        operacion = "u";
        lechon_Y = lechon_Y - pixels;
        comprobante(caminar, lechon_Y, operacion);
      break;
      case teclas.RIGHT:
        // Right suma en el eje X
        operacion = "r";
        lechon_X = lechon_X + pixels;
        comprobante(caminar, lechon_X, operacion);
      break;
      case teclas.DOWN:
        // Down suma en el eje Y
        operacion = "d";
        lechon_Y = lechon_Y + pixels;
        comprobante(caminar, lechon_Y, operacion);
      break;
    }
}


function comprobante(caminar, valor, operacion)
{

  for (var i = 0; i < all_animals.length; i++)
  {

    if (lechon_X == all_animals[i].posicion_x && lechon_Y == all_animals[i].posicion_y || lechon_X < 0 || lechon_Y < 0 || lechon_X > 420 || lechon_Y > 420)
    {

      switch (operacion)
      {
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


  if (caminar == true)
  {
      dibujar();
  }
}
