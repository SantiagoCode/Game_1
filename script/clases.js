// Esta es nuestra super clase base donde guardaremos el fondo en la posicion 0
// y luego los animales en las siguientes posiciones
class Animales
{
  constructor(nombre, url, x, y)
  {
    this.animal = nombre;
    this.url = url;
    this.posicion_x = x;
    this.posicion_y = y;
  }
}

class coin
{
  constructor(moneda, url, x, y) 
  {
      this.moneda = moneda;
      this.url = url;
      this.posicion_x = x;
      this.posicion_y = y;
  }
}
