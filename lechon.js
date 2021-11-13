document.addEventListener("keydown", calcular);
var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

var lechon_X = 210;
var lechon_Y = 210;
var pixels = 30;

var lechon = new Animales("lechon", "cerdo.png", lechon_X, lechon_Y);

// lechon para navidad
lechon.imagen = new Image();
lechon.imagen.src = lechon.url;
lechon.imagen.addEventListener("load", mover_lechon);


function calcular(evento)
{
  switch (evento.keyCode)
  {
    case teclas.LEFT:
      // Left resta en el eje X
      lechon_X = lechon_X - pixels;
    break;
    case teclas.UP:
      // Up resta en el eje Y
      lechon_Y = lechon_Y - pixels;
    break;
    case teclas.RIGHT:
      // Right suma en el eje X
      lechon_X = lechon_X + pixels;
    break;
    case teclas.DOWN:
      // Down suma en el eje Y
      lechon_Y = lechon_Y + pixels;
    break;
  }

  mover_lechon();
}

function mover_lechon()
{
  imprimir();
}
