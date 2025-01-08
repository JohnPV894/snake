"use strict";

//Crear un tablero
function crearTablero() {
      let tablero=[];
      for(let i=0 ; i<8 ; i++){
            tablero[i]=Array(8);
      }
      //console.log(tablero)
      return tablero;
}
//Pocisionar una manzana
function posicionManzana(tablero) {
      let posicionesLibres=[];
      for (let i = 0; i < tablero.length; i++) {
            for (let contador = 0; contador < tablero[i].length; contador++) {
                  if (tablero[i][contador]==null) {
                        posicionesLibres.push([i,contador])
                  }
                  
            }
            
      }
      Math.floor(Math.random*8)
      console.log(posicionesLibres.length);
      posicionesLibres[0][0]
      tablero[posicionesLibres[0][0]][posicionesLibres[7][1]]="X";
      console.log(tablero);
      
}
let tb = crearTablero();
posicionManzana(tb);
//Crear un objeto serpiente con {Dirrecion, largo, vivo}