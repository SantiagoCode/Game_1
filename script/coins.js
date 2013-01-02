// FUNCION PARA DIBUJAR
const dibujante = (color, xinicial, yinicial, xfinal, yfinal, grosor = 15) => {
  ctxCanvas.beginPath();
  ctxCanvas.lineWidth = grosor;
  ctxCanvas.strokeStyle = color;
  ctxCanvas.moveTo(xinicial, yinicial);
  ctxCanvas.lineTo(xfinal, yfinal);
  ctxCanvas.stroke();
  ctxCanvas.lineCap = "round";
  ctxCanvas.closePath();
}

let new_coin = true;
let coin_coordenadas;
let coin_coordenadas_anteriores;
let contador_monedas = 0;
let borde_moneda = 20;
const caja_conteo = document.querySelector(".conteo_text");
const objetivo_monedas = 3;

const farm_coin = () => {
  
  if (new_coin) {
    (contador_monedas !== objetivo_monedas)
    ? next_coin()
    : ganador()
  } else {
    dibujante("black", coin_coordenadas[0], coin_coordenadas[1], coin_coordenadas[0], coin_coordenadas[1], borde_moneda);
    dibujante("yellow", coin_coordenadas[0], coin_coordenadas[1], coin_coordenadas[0], coin_coordenadas[1]);
  }
  
  actualizacion_tabla();
}

const next_coin = () => {
  coin_coordenadas_anteriores = coin_coordenadas;

  do {
    coin_coordenadas = coordenadas_generator();
  } while (coin_coordenadas[0] == 0 || coin_coordenadas[1] == 0 || coin_coordenadas == coin_coordenadas_anteriores);

  new_coin = false;
  dibujante("black", coin_coordenadas[0], coin_coordenadas[1], coin_coordenadas[0], coin_coordenadas[1], borde_moneda);
  dibujante("yellow", coin_coordenadas[0], coin_coordenadas[1], coin_coordenadas[0], coin_coordenadas[1]);
}

const actualizacion_tabla = () => {
  caja_conteo.innerHTML = `Monedas Atrapadas: ${contador_monedas}`;
}

const ganador = () => {
  document.removeEventListener("keydown", movimiento);
  setTimeout(function(){
      document.querySelector("#ganador").classList.add("visible");
  }, 1000);
}