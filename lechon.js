document.addEventListener("keydown", calcular);
var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

// Cerdo PlumeRose
var lechon = {
  url: "cerdo.png",
  cargado: false
};

// lechon para navidad
lechon.imagen = new Image();
lechon.imagen.src = lechon.url;
lechon.imagen.addEventListener("load", cargarLechon);

function cargarLechon()
{
  lechon.cargado = true;
  dibujar();
}


// LA FUNCION DIBUJAR() CON EL CONDICIONAL QUE COMPRUEBA
// QUE YA CARGO LA IMAGEN QUE DIBUJA AL LECHON ESTA EN EL INDEX.JS


// ACA EMPIEZA EL TRABAJO PARA EL MOVIMIENTO DEL CERDO ESPECIAL PARA NAVIDAD
var lechon_X = 210;
var lechon_Y = 210;
var pixels = 30;

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

  moverLechon();
}

function moverLechon()
{
  dibujar();
  ctxCanvas.drawImage(lechon.imagen, lechon_X, lechon_Y);
}
