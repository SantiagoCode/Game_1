// FUNCION PRINCIPAL PARA DIBUJAR
function dibujante(color, xinicial, yinicial, xfinal, yfinal)
{
  ctxCanvas.beginPath();
  ctxCanvas.lineWidth = 15;
  ctxCanvas.strokeStyle = color;
  ctxCanvas.moveTo(xinicial, yinicial);
  ctxCanvas.lineTo(xfinal, yfinal);
  ctxCanvas.stroke();
  ctxCanvas.lineCap = "round";
  ctxCanvas.closePath();
}

var x, y;

function arreglo()
{

  do
  {
    var paso_libre = true;

    x = ( aleatorio(maximo_cuadricula, minimo_cuadricula) * multiplicador_cuadricula ) + 10;
    y = ( aleatorio(maximo_cuadricula, minimo_cuadricula) * multiplicador_cuadricula ) + 10;

    for (var i = 0; i < all_animals.length; i++)
    {
      if (x == all_animals[i].posicion_x && y == all_animals[i].posicion_y)
      {
        paso_libre = false;
        console.log("FUNCIONO");
      }
    }
  } while (paso_libre == false);

  moneda();
}


var color = "yellow";

function moneda()
{
  x = x + 40;
  y = y + 40;

  dibujante(color, --x, --y, ++x, ++y);
  dibujante(color, --x, ++y, ++x, --y);
  dibujante(color, --x, y, ++x, y);

  console.log("coin");
}

// var x = ( aleatorio(maximo_cuadricula, minimo_cuadricula) * multiplicador_cuadricula ) + 10;
